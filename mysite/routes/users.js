var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login',{});
});
router.get('/products', function(req, res, next) {
  res.render('products',{});
});
router.post('/logindata', function(req, res, next) {
  res.render('products',{});
});


module.exports = router;
