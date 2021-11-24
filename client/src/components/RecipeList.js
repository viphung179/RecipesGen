import React from 'react'
import Recipe from './Recipe';



function RecipeList(results,loading) {
    // if (loading) {
    //     return <h2>Getting Recipes...</h2>
    // }

    if (results.results.length == 0){
        return(
            <div>There are no recipes matching the search. Please try again.</div>
        )
    }
    
    const recipesList = results.results.map(r => <Recipe key={r.id} recipe = {r}/>)

    return (
        <div>
            <p>Click on recipe names below to see more details</p>
            {recipesList}
        </div>
    )
}

export default RecipeList
