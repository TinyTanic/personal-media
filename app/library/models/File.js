var Sequelize = require('sequelize');
var sequelize = require('../../db');

var File = sequelize.define('file', {
  name: {
    type: Sequelize.STRING,
    field: 'name'
  },
  prefixes: {
    type: Sequelize.STRING,
    field: 'prefixes'
  },
  type: {
    type: Sequelize.STRING,
    field: 'type'
  },
});

File.sync({force: true});

module.exports = File;
