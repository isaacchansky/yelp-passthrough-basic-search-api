var env = require('./env')

var express = require('express')
var app = express()
var cors = require('cors')
var Yelp = require('yelp')

app.use(cors());


var yelp = new Yelp({
  consumer_key: env.CONSUMER_KEY,
  consumer_secret: env.CONSUMER_SECRET,
  token: env.TOKEN,
  token_secret: env.SECRET_TOKEN,
})

app.get('/search', function (req, res) {
  console.log(req.query)
  yelp.search({ term: req.query.term, location: req.query.location })
  .then(function (data) {
    res.json(data)
  })
  .catch(function (err) {
    res.json(err)
  })

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
