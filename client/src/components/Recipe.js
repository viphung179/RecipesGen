import React from 'react'

// need to add event listener to each link

function getDetails(e) {
    e.preventDefault();
    localStorage.setItem('id',e.target.nextSibling.textContent);
    console.log(e.target.nextSibling.textContent)
    // {keywordSearch(searchTerms)};
    window.location.href='../recipeDetails'

}

// onClick={getDetails(recipe.id)}
    
//   href='https://spoonacular.com/recipeCardImages/recipeCard-1635215853646.png
function Recipe({recipe}) {
    // {console.log(recipe)}
    // const recipeID = recipe.id;
    return (
        <ul className='recipeblock'>
            <button className="recipet" onClick={getDetails}>
                <p>{recipe.title}</p>
                <p style={{display: 'none'}}>{recipe.id}</p>
                </button>
            <img src={recipe.image}></img>
        </ul>
    )
}

export default Recipe
