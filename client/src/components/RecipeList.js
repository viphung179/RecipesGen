import React from 'react'
import Recipe from './Recipe';


function RecipeList(results) {
    console.log(results.results.length)
    console.log(results.results)
    // console.log(results.results[0])
    if (results.results.length == 0){
        return(
            <div>There are no recipes matching the search. Please try again.</div>
        )
    }
    
    const recipesList = results.results.map(r => <Recipe key={r.id} recipe = {r}/>)
    // console.log(recipesList)
    return (
        <div>
            <p>Click on recipe names below to see more details</p>
            {
                recipesList
                // <h2>{results[0][1]}</h2>
                // <Recipe recipe = {results.results[0]}/>
            }
        </div>
    )
}

export default RecipeList
