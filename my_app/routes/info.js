var express = require('express');
var router = express.Router();

var model = require('../model/riot');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('info.ejs', {
    session : req.session.user
  });
});

router.post('/', async function(req, res){
    res.redirect('/');
});


module.exports = router;