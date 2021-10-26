import React from 'react'

function Recipe({recipe}) {
    {console.log(recipe)}
    return (
        <div>
            <a href='https://spoonacular.com/recipeCardImages/recipeCard-1635215853646.png'>{recipe.title}</a>
            <img src={recipe.image}></img>
        </div>
    )
}

export default Recipe
