var request = require('request');

var provider = 'http://www.omdbapi.com/';

var getFilmInfo = function(film, fn) {
   var url = provider + '?t=' + film + '&r=json';
   request(url, (error, response, json) => {

      return (!error) ? fn(film, JSON.parse(json)) : fn(film, JSON.parse(error));
   });
}


module.exports.getFilmInfo = getFilmInfo;
