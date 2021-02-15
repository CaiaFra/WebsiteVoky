const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cah-database', 'root', '', {
   dialect: 'mysql',
   host: 'localhost',
});

module.exports = sequelize;
