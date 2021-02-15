const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const BlackCard = sequelize.define('blackcard', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   type: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   text: {
      type: Sequelize.TEXT,
      allowNull: false,
   },
});

module.exports = BlackCard;
