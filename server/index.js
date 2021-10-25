const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
var CORS = require('cors')
const spoonURL = 'https://api.spoonacular.com/recipes/complexSearch'

app.use(CORS());



// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/keywords", (req, res) => {
  console.log(req.query)
  res.json({ message: "received" });
});

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

// GET Recipes by name
// app.get('/keywords',function(req,res,next){
  
//     getMemAllData(res);
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})