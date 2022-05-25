var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.mycounter){
    req.session.mycounter = 1
  }
  else {
    req.session.mycounter += 1
  }
  res.render('index', { counterValue: req.session.mycounter });

});

module.exports = router;
