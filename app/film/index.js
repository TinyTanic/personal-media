var express = require('express');
var router = express.Router();
var films = {
   films: [{
      title: 'avatar',
      genre: 'fantascienza',
      image: 'images/avatar.jpg'
   }, {
      title: 'altro film',
      genre: 'commedia',
      image: 'images/avatar.jpg'
   }]
};
/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('film/film', films);
});

module.exports = router;
