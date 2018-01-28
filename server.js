// server.js

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

// configure app with bodyParser() to get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;    // set our port, local host at https://localhost:8080

// API routing 
var router = express.Router();

router.get('/', function (req, res) {
    res.json({ reply: 'WOW SUCH API MUCH RESPONSE'});
});

app.use('/api', router);

app.listen(port);
console.log('shit has happened on port ' + port);