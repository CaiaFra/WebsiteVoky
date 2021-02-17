const { Sequelize } = require('sequelize');
const path = require('path');

const p = path.join(
   path.dirname(require.main.filename),
   'data',
   'database.sqlite'
);

const sequelize = new Sequelize({
   dialect: 'sqlite',
   storage: p,
});

module.exports = sequelize;
