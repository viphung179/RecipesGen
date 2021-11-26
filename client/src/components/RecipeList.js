import React from 'react'
import Recipe from './Recipe';

function RecipeList(results) {
    if (results.results.length == 0){
        return(
            <div>There are no recipes matching the search. Please try again.</div>
        )
    }
    
    // create results list based on search results
    const recipesList = results.results.map(r => <Recipe key={r.id} recipe = {r}/>)

    return (
        <div>
            <p>Click on recipe names below to see more details.</p>
            {recipesList}
        </div>
    )
}

export default RecipeList
