// import PropTypes from 'prop-types'
import Button from './Button'
import {Link} from 'react-router-dom';

// const baseURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=905d4d56750d46cc885ae7c248f71c22";

// const baseURL = "http://localhost:3001/keywords";

function handleSubmit(e) {
    e.preventDefault();
    const searchTerms = e.target.keywords.value
    if (searchTerms == '') {
        alert("Please enter recipe name to search");
        // <Link to='../results'>
        // </Link>
    } else {
        localStorage.setItem('keywords',searchTerms);
        // {keywordSearch(searchTerms)};
        window.location.href='../results'

    }
    
  }

function Form({keyword}) {
    return (
      <form onSubmit={handleSubmit}>
        <input className="searchBar" name='keywords' type="text" placeholder={keyword} />
        <Button color='green' text='Search'></Button>
      </form>
    );
  }



Form.defaultProps = {
    keyword: '',
}

// KeywordSearch.propTypes = {
//     title: PropTypes.string.isRequired,
// }

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

// document.getElementById('search').addEventListener('click', function(event){
//     let req = new XMLHttpRequest();
//     let nameSearch = document.getElementById('nameSearch').value;
//     let zipSearch = document.getElementById('zipSearch').value;
//     req.open('GET', baseUrl + "?nameSearch=" + nameSearch +  "&zipSearch=" + zipSearch, true);
//     req.addEventListener('load',function(){
//       if (req.status >= 200 && req.status < 400){
//         let response = JSON.parse(req.responseText);
//         deleteTable()
//         if (response["rows"].length != 0){
//           makeTable(response["rows"]);
//         }
//       } else {
//         console.log('Error in network request: ' + req.statusText);
//       }
//     })
//     req.send(null);
  
//     event.preventDefault();
//   });


export default Form
