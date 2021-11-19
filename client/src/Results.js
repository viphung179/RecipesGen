import RecipeList from "./components/RecipeList";
import axios from "axios";
import React, {useEffect,useState} from 'react'

const baseURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=905d4d56750d46cc885ae7c248f71c22";
const picURL = "http://127.0.0.1:3000/";

let searchTerms = localStorage.getItem('keywords');

// const testResults = [{id: 715392, title: 'Chicken Tortilla Soup (Slow Cooker)', image: 'https://spoonacular.com/recipeImages/715392-312x231.jpg', imageType: 'jpg'}, {id: 716268, title: 'African Chicken Peanut Stew', image: 'https://spoonacular.com/recipeImages/716268-312x231.jpg', imageType: 'jpg'}
// ,{id: 715415, title: 'Red Lentil Soup with Chicken and Turnips', image: 'https://spoonacular.com/recipeImages/715415-312x231.jpg', imageType: 'jpg'}
// ,{id: 795751, title: 'Chicken Fajita Stuffed Bell Pepper', image: 'https://spoonacular.com/recipeImages/795751-312x231.jpg', imageType: 'jpg'}
// ,{id: 715421, title: 'Cheesy Chicken Enchilada Quinoa Casserole', image: 'https://spoonacular.com/recipeImages/715421-312x231.jpg', imageType: 'jpg'}
// ,{id: 632244, title: 'Alouette Chicken Paprika', image: 'https://spoonacular.com/recipeImages/632244-312x231.jpg', imageType: 'jpg'}
// ,{id: 716361, title: 'Stir Fried Quinoa, Brown Rice and Chicken Breast', image: 'https://spoonacular.com/recipeImages/716361-312x231.jpg', imageType: 'jpg'}
// ,{id: 664090, title: 'Turkish Chicken Salad with Home-made Cacik Yogurt Sauce', image: 'https://spoonacular.com/recipeImages/664090-312x231.jpg', imageType: 'jpg'}
// ,{id: 646651, title: 'Herb chicken with sweet potato mash and sautéed broccoli', image: 'https://spoonacular.com/recipeImages/646651-312x231.jpg', imageType: 'jpg'}
// ,{id: 975070, title: 'Instant Pot Chicken Taco Soup', image: 'https://spoonacular.com/recipeImages/975070-312x231.jpg', imageType: 'jpg'}]
// const testResults = []
// console.log(testResults)

function backToSearch(e) {
  e.preventDefault();
  window.location.href='/';

}

export default function Results() {
  const [results, setResults] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    getAllResults();
    getImage();
  }, []);
  
  const getAllResults = () => {
    axios.get(baseURL+ "&titleMatch=" + searchTerms + "&number=5")
    .then((response)=>{
      const allResults = response.data.results;
      setResults(allResults);
    })
    .catch(error => console.error(`Error: ${error}`))
  }

  const getImage = () => {
    axios.get(picURL+ searchTerms)
    .then((response)=>{
      const searchImage = JSON.parse(response.data)[0];
      setImage(searchImage);
    })
    .catch(error => console.error(`Error: ${error}`))
  }
  
    return (
      <div className="container">
      <button className="btn" onClick={backToSearch}>Back to Search</button>
      <h1 style={{backgroundImage: "url(" + image + ")",padding: "35px 0px 35px 0px", backgroundSize: "cover", backgroundPosition: 'center'}}>Search Results</h1>
      <RecipeList results={results}/>
      <button className="btn" onClick={backToSearch}>Back to Search</button>
    </div>
    )
};
