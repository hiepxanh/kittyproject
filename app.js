

var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  jade = require('jade'),
  path = require('path');

// mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});

//app init
var app = express();

// the directory where the template files are located.
app.set('views', './app.views')
// the template engine to use.
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
//
//=========================
// get an instance of router
var router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});

// apply the routes to our application
app.use('/', router);
//========================================
//<------------------static---------------------------------------------------->

// Đường dẫn tới thư mục pulic
//app.use('/cms/', express.static(__dirname + '/public/'));
app.use('/cms',express.static(path.join(__dirname, 'public')));

// Đường dẫn tới thư mục upload
app.use('/pictures/', express.static(__dirname + '/public/upload/'));
//----------------------------route ------------------------------------------//
app.get('/chia-se/tai-lieu/chia-se-sach-cho-dan-lap-trinh-vien', function (req, res) {
  res.render('articles-1');
});
app.get('/chuong-trinh/su-kien/english-and-it-why-how-what', function (req, res) {
  res.render('events-1');
});
// create a route to render the index.jade file.
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/shit', function (req, res) {
  res.render('index2');
});

// create a route to render the about-us.jade file.
app.get('/about-us', function (req, res) {
  res.render('about-us');
});
app.get('/ve-chung-toi', function (req, res) {
  res.render('about-us');
});
// create a route to render the courses.jade file.
app.get('/courses', function (req, res) {
  res.render('courses');
});
app.get('/khoa-hoc', function (req, res) {
  res.render('courses');
});

// create a route to render the contact.jade file.
app.get('/contact', function (req, res) {
  res.render('contact');
});
app.get('/lien-he', function (req, res) {
  res.render('contact');
});
// create a route to render the event.jade file.
app.get('/events', function (req, res) {
  res.render('events');
});
app.get('/chuong-trinh', function (req, res) {
  res.render('events');
});
// create a route to render the articles.jade file.
app.get('/articles', function (req, res) {
  res.render('articles');
});
app.get('/chia-se/', function (req, res) {
  res.render('articles');
});
// create a route to render the portfolio.jade file.
app.get('/portfolio', function (req, res) {
  res.render('portfolio');
});
// we have to create router here
// CREATE ROUTER
//==================================
// get an instance of router
var router_instructors = express.Router();

// create a route to render the intructors-1.jade file.
router_instructors.get('/1', function (req, res) {
  res.render('instructors-1');
});

router_instructors.get('/2', function (req, res) {
  res.render('instructors-2');
});

router_instructors.get('/3', function (req, res) {
  res.render('instructors-3');
});

router_instructors.get('/4', function (req, res) {
  res.render('instructors-4');
});

router_instructors.get('/le-hoang-tu', function (req, res) {
  res.render('instructors-1');
});

router_instructors.get('/bui-xuan-canh', function (req, res) {
  res.render('instructors-2');
});

router_instructors.get('/do-anh-tu', function (req, res) {
  res.render('instructors-3');
});

router_instructors.get('/nguyen-tien-dat', function (req, res) {
  res.render('instructors-4');
});

router_instructors.get('/nguyen-si-thanh-son', function (req, res) {
  res.render('instructors-5');
});

router_instructors.get('/ton-hong-duc', function (req, res) {
  res.render('instructors-6');
});

router_instructors.get('/tran-quang-hiep', function (req, res) {
  res.render('instructors-7');
});

router_instructors.get('/cuong-nguyen', function (req, res) {
  res.render('instructors-8');
});

// Đường dẫn tới thư mục pulic, static file cho instructor
router_instructors.use('/cms/', express.static(__dirname + '/public/'));

app.use('/instructors',router_instructors)
app.use('/giang-vien',router_instructors)
//router cho courses
//-------------------
// get an instance of router
var router_courses = express.Router();

// create a route to render the intructors-1.jade file.
router_courses.get('/1', function (req, res) {
  res.render('courses-1');
});

router_courses.get('/2', function (req, res) {
  res.render('courses-2');
});

router_courses.get('/3', function (req, res) {
  res.render('courses-3');
});

router_courses.get('/4', function (req, res) {
  res.render('courses-4');
});

router_courses.get('/code-for-everyone', function (req, res) {
  res.render('courses-1');
});

router_courses.get('/iOS', function (req, res) {
  res.render('courses-2');
});

router_courses.get('/android', function (req, res) {
  res.render('courses-3');
});

router_courses.get('/web-fullstack', function (req, res) {
  res.render('courses-4');
});

// Đường dẫn tới thư mục pulic, static file cho instructor
router_courses.use('/cms/', express.static(__dirname + '/public/'));

app.use('/courses',router_courses)
app.use('/khoa-hoc',router_courses)
//===================================
//router cho articles
//-------------------
// get an instance of router
var router_articles = express.Router();

// create a route to render the intructors-1.jade file.
router_articles.get('/chia-se-sach-cho-dan-lap-trinh-vien', function (req, res) {
  res.render('articles-1');
});

// Đường dẫn tới thư mục pulic, static file cho instructor
router_articles.use('/cms/', express.static(__dirname + '/public/'));

app.use('/chia-se/',router_articles)
//===================================
//===================================
//router cho events
//-------------------
// get an instance of router
var router_events = express.Router();


// create a route to render the intructors-1.jade file.
router_events.get('/english-and-it-why-how-what', function (req, res) {
  res.render('events-1');
});

// Đường dẫn tới thư mục pulic, static file cho instructor
router_events.use('/cms/', express.static(__dirname + '/public/'));

app.use('/chuong-trinh/',router_events)
//===================================

app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get((req, res) => {
        res.render('error'); // render jade file: views/error
});

app.route('/*')
    .get((req, res) => {
        res.render('errror')
    });
//</--------------------------route ----------------------------------------->//



// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
console.log('so sad')

require('./config/express')(app, config);
app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
