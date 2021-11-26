import axios from "axios";
import React, {useEffect,useState} from 'react';

const calorieURL = "http://flip3.engr.oregonstate.edu:5151?id="
const spoonURL = "https://api.spoonacular.com/recipes/"

// create each recipe button on Results page
function Recipe({recipe}) {
  const [calories, setCalories] = useState('');
  const [URL, setURL] = useState('');
  const getCalories = () => {
    axios.get(calorieURL + recipe.id)
    .then((response)=>{
      const calResults= response.data;
      setCalories(calResults.calories);
    })
    .catch(error => console.error(`Error: ${error}`))
  };

  const getURL = () => {
    axios.get(spoonURL + recipe.id + '/information?apiKey=905d4d56750d46cc885ae7c248f71c22')
    .then((response)=>{
      const URLResults= response.data.spoonacularSourceUrl;
      setURL(URLResults);
    })
    .catch(error => console.error(`Error: ${error}`))
  };
    
  useEffect(() => {
    getCalories();
    getURL();
  }, []);
  
  const goToPage = (link) => {
    window.open(link)
  };

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
