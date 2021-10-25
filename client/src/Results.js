import {useState} from 'react'
import Header from './components/Header'
import Form from './components/KeywordSearch'
import Ingredients from './components/Ingredients'
const baseURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=905d4d56750d46cc885ae7c248f71c22";

let searchTerms = localStorage.getItem('keywords');

function keywordSearch(keyword) {
    let req = new XMLHttpRequest();
    req.open('GET', baseURL + "&titleMatch=" + keyword);
    req.addEventListener('load',function(){
      if (req.status >= 200 && req.status < 400){
        let response = JSON.parse(req.responseText);
        // console.log(response)
        window.location.href='../results'
        if (response.results.length == 0){
          console.log("nothing")
        } else {
          console.log(response.results.length)
        }
      } else {
        console.log('Error in network request: ' + req.statusText);
      }
    })
    req.send(null);
    
  };

function Results() {
  {keywordSearch(searchTerms)}
  return (
    <div className="container">
      <h1>Results</h1>
    
    </div>
  );
}

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


export default Results;
