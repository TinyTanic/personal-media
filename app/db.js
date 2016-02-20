var Sequelize = require('sequelize');
var path = require('path');

var sequelize = new Sequelize('db', 'username', 'password', {
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  storage: path.join(__dirname, '..', 'data', 'database.sqlite'),
});

module.exports = sequelize;
