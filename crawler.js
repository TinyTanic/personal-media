var request = require('request');

var provider = 'http://www.omdbapi.com/';

var getFilmInfo = function(film, fn) {
   var url = provider + '?t=' + film + '&r=json';
   request(url, (error, response, json) => {
      (!error) ? fn(json): fn(error);
   });
}

var getX = function(y) {
   return 10 + y;
}

module.exports.getFilmInfo = getFilmInfo;
module.exports.getX = getX;
