var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/include', function(req, res, next) {
    res.render('include', { title: 'include' });
});

/* GET home page. */
router.get('/extend', function(req, res, next) {
    res.render('extend', { title: 'extend' });
});


module.exports = router;
