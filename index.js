var express = require('express');
var cors = require('cors');
var request = require('request');
var app = express();

//app.use(cors());
app.get('/myroute/checkDatePrime', function(req, res){
  request('http://api.openweathermap.org/data/2.5/weather?q=London&appid=96ff10c3fa26c16e40d6a17493aec302', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body); // parse the api response and save it in 'onfo' variable
     
      var date;
      date = info.dt; // take date from api response
      console.log("dt:",date);
      if (isPrime(date)){
        res.send(info); // if date is prime then JSON API response
      }else{
        res.send("Date not prime");
      }
     
      
    }else{
      res.send("API Error");
    }
    function isPrime(x){
      console.log("called:",x);
      var d;
      d = x-1;
      while(d>1){
        if((x%d) == 0) return false;
        d--;
      }
      return true;
    }
  })
});
app.listen(3000);
console.log("The server is now running on port 3000.");