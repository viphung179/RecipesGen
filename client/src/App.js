import {useState} from 'react'
import Header from './components/Header'
import Form from './components/KeywordSearch'
import Ingredients from './components/Ingredients'


function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="container">
      <Header/>
      <Form keyword="Search by recipe name"/>
    </div>
  );
}

export default App;
