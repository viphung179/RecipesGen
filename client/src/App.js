import Home from './Home';
import Results from './Results';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component ={Home} />
          <Route path="/results" component ={Results} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
