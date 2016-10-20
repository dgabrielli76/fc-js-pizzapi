/* Setup express */
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

/* Set port */
var port = process.env.PORT || 8080;        // set our port

/* Setup routes */
var router = express.Router();
router.get('/pizzas', function(req, res) {
  if (process.env.API_LENTE == '1') {
    setTimeout(function() {
      res.sendFile(__dirname + '/pizzas.json');
    }, 5000);
  } else {
    res.sendFile(__dirname + '/pizzas.json');
  }
});
router.get('/orders', function(req, res) {
  if (process.env.API_LENTE ==  '1') {
    setTimeout(function() {
      res.sendFile(__dirname + '/orders.json');
    }, 5000);
  } else {
    res.sendFile(__dirname + '/orders.json');
  }
});
app.use('/', router);

/* Start the server */
app.listen(port);
console.log('Server started on port ' + port);
