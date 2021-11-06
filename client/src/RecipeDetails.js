import Button from "./components/Button";

const baseURL = "https://api.spoonacular.com/recipes/";
const calorieURL = "http://flip3.engr.oregonstate.edu:5151?id="
// https://api.spoonacular.com/recipes/4632/card?apiKey=905d4d56750d46cc885ae7c248f71c22

let id = localStorage.getItem('id');

function getRecipe(id) {
    let req = new XMLHttpRequest();
    req.open('GET', baseURL + id + '/card?apiKey=905d4d56750d46cc885ae7c248f71c22');
    req.addEventListener('load',function(){
      if (req.status >= 200 && req.status < 400){
        let response = JSON.parse(req.responseText);
        console.log(response)
      } else {
        console.log('Error in network request: ' + req.statusText);
      }
    })
    req.send(null);
    
  };

function getCalories(id) {
  let req = new XMLHttpRequest();
  req.open('GET', calorieURL + id);
  req.addEventListener('load',function(){
    if (req.status >= 200 && req.status < 400){
      let response = JSON.parse(req.responseText);
      console.log(response.calories)
      // showCalories(response.calories)
      // console.log(id)
      localStorage.setItem("calories", response.calories)
      let target = document.getElementById("c")
      target.textContent = response.calories
    } else {
      console.log('Error in network request: ' + req.statusText);
    }
  })
  req.send(null);

};

// getRecipe(id)
// getCalories(id)


const testResults = {
    "url": "https://spoonacular.com/recipeCardImages/recipeCard-1635217389545.png",
    "status": "success",
    "time": "578ms"
}

// console.log(testResults)
function backToResults(e) {
    e.preventDefault();
    // console.log(e.target)
    // {keywordSearch(searchTerms)};
    window.location.href='/results';

}


function RecipeDetails() {
  console.log("here" + localStorage.getItem("calories"))
  getCalories(id)
  return (
    <div>
      <div>
        <button className="btn" onClick={backToResults}>Back to results</button>
        <p>Recipe Calories per Serving: <span id="c"></span></p>
      </div>
      <img src={testResults.url}></img>
    </div>
  );
}

export default RecipeDetails;
