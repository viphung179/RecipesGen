import axios from "axios";
import React, {useEffect,useState} from 'react';

const calorieURL = "http://flip3.engr.oregonstate.edu:5151?id="
const spoonURL = "https://api.spoonacular.com/recipes/"

const getURL = (recipe, setURL) => {
  axios.get(spoonURL + recipe.id + '/information?apiKey=905d4d56750d46cc885ae7c248f71c22')
  .then((response)=>{
    const URLResults= response.data.spoonacularSourceUrl;
    setURL(URLResults);
  })
  .catch(error => console.error(`Error: ${error}`))
};

const getCalories = (recipe, setCalories) => {
  axios.get(calorieURL + recipe.id)
  .then((response)=>{
    const calResults= response.data;
    setCalories(calResults.calories);
  })
  .catch(error => console.error(`Error: ${error}`))
};

const goToPage = (link) => {
  window.open(link)
};

// create each recipe button on Results page
function Recipe({recipe}) {
  const [calories, setCalories] = useState('');
  const [URL, setURL] = useState('');

  useEffect(() => {
    getCalories(recipe, setCalories);
    getURL(recipe, setURL);
  }, []);
  
  return (
    <ul className='recipeblock'>
      <button className="recipet" onClick={()=>goToPage(URL)}>
        <p>{recipe.title}</p>
        <p style={{display: 'none'}}>{recipe.id}</p>
        <p>Calories per serving: {calories}</p>
      </button>
    </ul>
  )
}

export default Recipe
