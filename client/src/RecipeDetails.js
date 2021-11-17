import axios from "axios";
import React, {useEffect,useState} from 'react';

const baseURL = "https://api.spoonacular.com/recipes/";
// const calorieURL = "http://flip3.engr.oregonstate.edu:5151?id="
// https://api.spoonacular.com/recipes/4632/card?apiKey=905d4d56750d46cc885ae7c248f71c22

let id = localStorage.getItem('id');

function backToResults(e) {
    e.preventDefault();
    window.location.href='/results';

}
function printRecipe(e) {
  e.preventDefault();
  window.print();

}

export default function RecipeDetails() {
  const [details, setDetails] = useState('')
  const [calories, setCalories] = useState('')

  useEffect(() => {
    getDetails();
    // getCalories();
  }, []);
  
  const getDetails = () => {
    axios.get(baseURL + id + '/card?apiKey=905d4d56750d46cc885ae7c248f71c22')
    .then((response)=>{
      const allDetails = response.data;
      setDetails(allDetails.url);
    })
    .catch(error => alert("Recipe currently unavailable, please select a different recipe."))
  }

  // const getCalories = () => {
  //   axios.get(calorieURL + id)
  //   .then((response)=>{
  //     const calResults= response.data;
  //     console.log(calResults)
  //     setCalories(calResults.calories);
  //   })
  //   .catch(error => console.error(`Error: ${error}`))
  // }
    return (
      <div>
      <div>
        <button className="btn" onClick={backToResults}>Back to results</button>
        <button className="btn" onClick={printRecipe}>Print This Recipe</button>
        {/* <p>Recipe Calories per Serving: <span id="c">{calories}</span></p> */}
      </div>
      <img src={details}></img>
    </div>
    )
};