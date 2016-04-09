

var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

// mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();

app.use(express.static(__dirname + '/public/public'));

app.route('/*')
    .get((req, res) => {
        res.sendFile(__dirname+'/'+'/public/public/index.html');
    });

app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get((req, res) => {
        res.sendFile(__dirname+'/'+'/public/public/index.html');
});
    
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
console.log('so sad')

require('./config/express')(app, config);
app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

