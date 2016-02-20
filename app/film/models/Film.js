var Sequelize = require('sequelize');
var sequelize = require('../../db');

var File = require('../../library/models/File');

var model = {
   title: {
      type: Sequelize.STRING,
      field: 'Title'
   },
   Year: {
      type: Sequelize.INTEGER
   },
   Rated: {
      type: Sequelize.STRING
   },
   Released: {
      type: Sequelize.DATE
   },
   Runtime: {
      type: Sequelize.STRING
   },
   Genre: {
      type: Sequelize.STRING
   },
   Director: {
      type: Sequelize.STRING
   },
   Writer: {
      type: Sequelize.STRING
   },
   Actors: {
      type: Sequelize.STRING
   },
   Plot: {
      type: Sequelize.STRING
   },
   Language: {
      type: Sequelize.STRING
   },
   Country: {
      type: Sequelize.STRING
   },
   Awards: {
      type: Sequelize.STRING
   },
   Poster: {
      type: Sequelize.STRING
   },
   Metascore: {
      type: Sequelize.INTEGER
   },
   imdbRating: {
      type: Sequelize.FLOAT
   },
   imdbVotes: {
      type: Sequelize.INTEGER
   },
   imdbID: {
      type: Sequelize.STRING,
      primaryKey: true
   },
   Type: {
      type: Sequelize.STRING
   },
   Response: {
      type: Sequelize.BOOLEAN
   },
}


var Film = sequelize.define('film', model);

Film.belongsTo(File);

Film.sync({
   force: false
});

module.exports = Film;
