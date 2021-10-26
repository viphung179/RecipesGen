// import {useState} from 'react'
// import Header from './components/Header';
// import Form from './components/KeywordSearch';
// import Ingredients from './components/Ingredients';
import Home from './Home';
import Results from './Results';
import RecipesDetails from'./RecipeDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component ={Home} />
          <Route path="/results" component ={Results} />
          <Route path="/recipeDetails" component ={RecipesDetails} />
          {/* <Route path="/" exact component ={Home} /> */}
        {/* <Header/>
        <Form keyword="Search by recipe name"/> */}
        </Switch>
      </div>
    </Router>
  );
}



export default App;
