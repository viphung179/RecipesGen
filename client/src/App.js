import Home from './Home';
import Results from './Results';
import RecipesDetails from'./RecipeDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component ={Home} />
          <Route path="/results" component ={Results} />
          <Route path="/recipeDetails" component ={RecipesDetails} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
