import React from 'react'
import Recipe from './Recipe';


function RecipeList(results) {
    // console.log(results.results[0].id)

    const recipesList = results.results.map(r => <Recipe key={r.id} recipe = {r}/>)
    // console.log(recipesList)
    return (
        <div>
            {
                recipesList
                // <h2>{results[0][1]}</h2>
                // <Recipe recipe = {results.results[0]}/>
            }
        </div>
    )
}

export default RecipeList
