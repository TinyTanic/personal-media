var crawler = require('./crawler');
var fs = require('fs');
var Film = require('./app/film/models/Film')

var fs = require('fs');

Film.findAll().then(function(films) {
   fs.writeFile("./resp", JSON.stringify(films), function(err) {
      if (err) {
         return console.log(err);
      }
      
   });

});



// fs.readFile('./filmlist', 'utf8', (err, data) => {
//    var films = data.split('\n');
//
//    films.forEach(function(film) {
//       var f = film.split('.')[0];
//       crawler.getFilmInfo(f, function(filmName, film) {
//          if (film.Response == 'True') {
//             Film.create(film).then(function(flm) {
//                console.log(flm.Title + ' inserted');
//                num ++;
//             });
//          }
//       });
//    });
//
//    console.log(num);





// for (i = 0; i < films.length; i++) {
//    crawler.getFilmInfo(films[i].split('.')[0], function(filmName, film) {
//       if(film.Response == 'True'){
//          Film.create(film).then(function(flm){
//             console.log(flm.Title + ' inserted');
//          })
//       }
//    });
//    // }
// });
