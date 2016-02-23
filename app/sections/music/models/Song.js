var Sequelize = require('sequelize');
var sequelize = require('../../db');

var File = require('../../library/models/File');

var Song = sequelize.define('music_song', {
   title: {
      type: Sequelize.STRING,
      field: 'title'
   },
   track: {
      type: Sequelize.INTEGER,
      field: 'track'
   },
   length: {
      type: Sequelize.INTEGER,
      field: 'length'
   },
});

Song.belongsTo(File);

Song.sync({
   force: false
});
