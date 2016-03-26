var env = require('./env');

var express = require('express');
var app = express();
// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: env.CONSUMER_KEY,
  consumer_secret: env.CONSUMER_SECRET,
  token: env.TOKEN,
  token_secret: env.SECRET_TOKEN,
});

app.get('/search', function (req, res) {
  console.log(req.query)
  yelp.search({ term: req.query.term, location: req.query.location })
  .then(function (data) {
    res.json(data);
    console.log(data);
  })
  .catch(function (err) {
    res.json(err);
    console.error(err);
  });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
