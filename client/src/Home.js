import Header from './components/Header';
import Form from './components/KeywordSearch';


function Home() {
  return (
      <div className="container">
        <Header/>
        <p>Use the Search bar below to look for your favorite recipes!</p>
        <Form keyword="Search by recipe name"/>
        <p>*At least one word is needed for the search.</p>
      </div>

  );
}

export default Home;
