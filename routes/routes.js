// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
    res.render('pages/main-page');
    console.log('Main page has been loaded')
});

router.get('/about', function(req, res) {
    res.render('pages/about');
    console.log('About page has been loaded')
});