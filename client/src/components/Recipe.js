import axios from "axios";
import React, {useEffect,useState} from 'react';

const calorieURL = "http://flip3.engr.oregonstate.edu:5151?id="

function getDetails(e) {
    e.preventDefault();
    localStorage.setItem('id',e.target.nextSibling.textContent);
    // console.log(e.target.nextSibling.textContent)
    window.location.href='../recipeDetails'

}
    
//   href='https://spoonacular.com/recipeCardImages/recipeCard-1635215853646.png
function Recipe({recipe}) {

    const [calories, setCalories] = useState('')

    useEffect(() => {
        // getDetails();
        getCalories();
    }, []);

    const getCalories = () => {
        axios.get(calorieURL + recipe.id)
        .then((response)=>{
          const calResults= response.data;
          console.log(calResults)
          setCalories(calResults.calories);
        })
        .catch(error => console.error(`Error: ${error}`))
      }
    return (
        <ul className='recipeblock'>
            <button className="recipet" onClick={getDetails}>
                <p>{recipe.title}</p>
                <p style={{display: 'none'}}>{recipe.id}</p>
            </button>
            <p>Calories per serving: {calories}</p>
            
            {/* <img src={recipe.image}></img> */}
        </ul>
    )
}

export default Recipe
