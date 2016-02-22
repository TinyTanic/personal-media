var express = require('express');
var Film = require('./models/Film');
var Handlebars = require('handlebars');
var router = express.Router();

Handlebars.registerHelper('posterChooser', function(filmPoster) {
  if(filmPoster == 'N/A') return 'images/na.jpg';
  return filmPoster;
});


Film.findAll().then(function(films){
   router.get('/', function(req, res, next) {
      res.render('film/film', {films: films});
   });
});



module.exports = router;
