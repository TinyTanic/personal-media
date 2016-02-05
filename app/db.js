var Sequelize = require('sequelize');
var path = require('path');

var sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', 'data', 'database.sqlite')
});

module.exports = sequelize;
