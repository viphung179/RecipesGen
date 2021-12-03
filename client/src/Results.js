import RecipeList from "./components/RecipeList";
import Pagination from "./components/Pagination";
import axios from "axios";
import React, {useEffect,useState} from 'react'

const baseURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=905d4d56750d46cc885ae7c248f71c22";
const picURL = "http://127.0.0.1:3000/";
const ingURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=905d4d56750d46cc885ae7c248f71c22";

let keywords = localStorage.getItem('keywords');
let ingredients = localStorage.getItem('ingredients');

function backToSearch(e) {
  e.preventDefault();
  window.location.href='/';
}

const getKeywordsResults = (setResults) => {
  axios.get(baseURL+ "&titleMatch=" + keywords + "&number=100")
  .then((response)=>{
    const allResults = response.data.results;
    setResults(allResults);
    localStorage.removeItem("keywords");
  })

  .catch(error => console.error(`Error: ${error}`))
}

const getIngResults = (setResults) => {
  let ingredientsList = ingredients.replaceAll(", ", ",").split(',').join(",+");
  axios.get(ingURL+ "&ingredients=" + ingredientsList + "&number=100")
  .then((response)=>{
    const allResults = response.data;
    setResults(allResults);
    localStorage.removeItem("ingredients");
  })

  .catch(error => console.error(`Error: ${error}`))
}

// get Image for search keyword from teammate's microservice
const getImage = (keypic,setImage) => {
  axios.get(picURL+ keypic)
  .then((response)=>{
    const searchImage = JSON.parse(response.data)[0];
    setImage(searchImage);
  })
  .catch(error => console.error(`Error: ${error}`))
}

export default function Results() {
  const [results, setResults] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [recsPerPage] = useState(10);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (keywords) {
      getKeywordsResults(setResults);
      getImage(keywords,setImage)
    }
    else if (ingredients) {
      getIngResults(setResults);
      getImage(ingredients.replaceAll(", ", ",").split(',')[0],setImage)
    }
  }, []);

  //Get current page recipes
  const indexOfLastRec = curPage * recsPerPage;
  const indexOfFistRec = indexOfLastRec - recsPerPage;
  const curRecs = results.slice(indexOfFistRec, indexOfLastRec);

  // Change results page
  const paginate = (pageNumber) => setCurPage(pageNumber);
  
  return (
    <div className="container">
      <button className="btn" onClick={backToSearch}>Back to Search</button>
      <h1 className="searchPic" style={{ backgroundImage: "url(" + image + ")"}}>Search Results</h1>
      <RecipeList results={curRecs}/>
      <Pagination recsPerPage={recsPerPage} totalRecs={results.length} paginate={paginate}/>
      <button className="btn" onClick={backToSearch}>Back to Search</button>
    </div>
  )
};

