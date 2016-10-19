/* Setup express */
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Set port */
var port = process.env.PORT || 8080;        // set our port

/* Setup routes */
var router = express.Router();
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});
app.use('/api', router);

/* Start the server */
app.listen(port);
console.log('Server started on port ' + port);
