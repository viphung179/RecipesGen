function handleSubmit(e) {
  e.preventDefault();
  const searchTerms = e.target.keywords.value
  if (searchTerms == '') {
    alert("Please enter recipe name to search");
      
  } else {
    localStorage.setItem('keywords',searchTerms);
    window.location.href='../results'
  } 
}

function FormKeywords({keyword}) {
  return (
    <form onSubmit={handleSubmit}>
      <input className="searchBar" name='keywords' type="text" placeholder={keyword} />
      <button className = "btn">Search</button>
    </form>
  );
}

FormKeywords.defaultProps = {
  keyword: '',
}

export default FormKeywords
