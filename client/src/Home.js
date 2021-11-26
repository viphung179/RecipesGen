import FormKeywords from './components/KeywordSearch';
import FormIngredients from './components/IngredientsSearch';


function Home() {
  return (
    <div className="container">
      <h1>Recipe Generator</h1>
      <p>Use the Search bars below to look for your favorite recipes using recipe name or ingredients!</p>
      <FormKeywords keyword="Search by recipe name"/>
      <p></p>
      <FormIngredients ingredients="Search by ingredients"/>
      <p>*Separate ingredients by commas</p>
    </div>

      

  );
};

export default Home;
