var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('film/film');
});
console.log('---------------------');
console.log(__dirname);
console.log('---------------------');

module.exports = router;
