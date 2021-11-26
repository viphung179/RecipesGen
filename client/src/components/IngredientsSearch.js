function handleSubmit(e) {
  e.preventDefault();
  const searchTerms = e.target.ingredients.value;
  if (searchTerms == '') {
    alert("Please enter ingredients to search");
  } else {
    localStorage.setItem('ingredients',searchTerms);
    window.location.href='../results';
  }
}
  
function FormIngredients({ingredients}) {
  return (
    <form onSubmit={handleSubmit}>
      <input className="searchBar" name='ingredients' type="text" placeholder={ingredients} />
      <button className = "btn">Search</button>
    </form>
  );
}

FormIngredients.defaultProps = {
  ingredients: '',
}

export default FormIngredients
  