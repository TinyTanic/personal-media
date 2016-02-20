var films = require('./crawler');
var film;
var fn = function(value) {
   film = value;
}

films.getFilmInfo('avatar', fn);
console.log(film);
console.log(films.getX(4));
