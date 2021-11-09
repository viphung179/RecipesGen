const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001;
const request = require('request')
const app = express();
var CORS = require('cors');
const { type } = require('os');
const URL = 'https://www.zipcodeapi.com/rest/tp7KNMXR0rMVa5zEPHqYIzgf3cDecpbN3FHcAndmJJ3tGNBH8BmJgMf8k3xIhYnA/distance.json/' ///<zip_code1>/<zip_code2>/<units>'

app.use(CORS());

// Route to receive Get HTTP request
app.get('/',function(req,resp,next){
  if (req.query.from && req.query.to && req.query.unit){
    let fromZip = req.query.from;
    let toZip = req.query.to;
    let unit = req.query.unit;

    let distance = {'distance': null}

    // requests to zipcode API
    request(URL + fromZip + '/' + toZip + '/' + unit, (err, res, body) => {
      if (err) { return console.log(err); }
      // console.log(typeof body)
      resp.send(body)
    });
  }
});

app.use(function(req,res){
  res.status(404);
  res.send('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.send('500');
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})