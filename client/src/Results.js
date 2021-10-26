// import {useState} from 'react'
// import Header from './components/Header'
// import Form from './components/KeywordSearch'
// import Ingredients from './components/Ingredients'
import RecipeList from "./components/RecipeList";
import Button from "./components/Button";

const baseURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=905d4d56750d46cc885ae7c248f71c22";

let searchTerms = localStorage.getItem('keywords');

function keywordSearch(keyword) {
    let req = new XMLHttpRequest();
    req.open('GET', baseURL + "&titleMatch=" + keyword);
    req.addEventListener('load',function(){
      if (req.status >= 200 && req.status < 400){
        let response = JSON.parse(req.responseText);
        // console.log(response)
        // window.location.href='../results'
        if (response.results.length == 0){
          console.log("nothing")
        } else {
          localStorage.setItem('recipes',response.results)
        }
      } else {
        console.log('Error in network request: ' + req.statusText);
      }
    })
    req.send(null);
    
  };
// keywordSearch(searchTerms)
const testResults = [{id: 715392, title: 'Chicken Tortilla Soup (Slow Cooker)', image: 'https://spoonacular.com/recipeImages/715392-312x231.jpg', imageType: 'jpg'}, {id: 716268, title: 'African Chicken Peanut Stew', image: 'https://spoonacular.com/recipeImages/716268-312x231.jpg', imageType: 'jpg'}
,{id: 715415, title: 'Red Lentil Soup with Chicken and Turnips', image: 'https://spoonacular.com/recipeImages/715415-312x231.jpg', imageType: 'jpg'}
,{id: 795751, title: 'Chicken Fajita Stuffed Bell Pepper', image: 'https://spoonacular.com/recipeImages/795751-312x231.jpg', imageType: 'jpg'}
,{id: 715421, title: 'Cheesy Chicken Enchilada Quinoa Casserole', image: 'https://spoonacular.com/recipeImages/715421-312x231.jpg', imageType: 'jpg'}
,{id: 632244, title: 'Alouette Chicken Paprika', image: 'https://spoonacular.com/recipeImages/632244-312x231.jpg', imageType: 'jpg'}
,{id: 716361, title: 'Stir Fried Quinoa, Brown Rice and Chicken Breast', image: 'https://spoonacular.com/recipeImages/716361-312x231.jpg', imageType: 'jpg'}
,{id: 664090, title: 'Turkish Chicken Salad with Home-made Cacik Yogurt Sauce', image: 'https://spoonacular.com/recipeImages/664090-312x231.jpg', imageType: 'jpg'}
,{id: 646651, title: 'Herb chicken with sweet potato mash and sautéed broccoli', image: 'https://spoonacular.com/recipeImages/646651-312x231.jpg', imageType: 'jpg'}
,{id: 975070, title: 'Instant Pot Chicken Taco Soup', image: 'https://spoonacular.com/recipeImages/975070-312x231.jpg', imageType: 'jpg'}]

// console.log(testResults)
function backToSearch(e) {
  e.preventDefault();
  // console.log(e.target)
  // {keywordSearch(searchTerms)};
  window.location.href='/';

}

function Results() {
  
  return (
    <div className="container">
      <h1>Results</h1>
      {/* {keywordSearch(searchTerms)} */}
      <RecipeList results={testResults}/>
      <button onClick={backToSearch}>Back to Search</button>
    </div>
  );
}

// function keywordSearch(keyword) {
//     let req = new XMLHttpRequest();
//     req.open('GET', baseURL + "&titleMatch=" + keyword);
//     req.addEventListener('load',function(){
//       if (req.status >= 200 && req.status < 400){
//         let response = JSON.parse(req.responseText);
//         // console.log(response)
//         window.location.href='../results'
//         if (response.results.length == 0){
//           console.log("nothing")
//         } else {
//           console.log(response.results.length)
//         }
//       } else {
//         console.log('Error in network request: ' + req.statusText);
//       }
//     })
//     req.send(null);
    
//   };


export default Results;
