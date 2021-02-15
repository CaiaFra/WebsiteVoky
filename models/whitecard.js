const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const WhiteCard = sequelize.define('whitecard', {
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

module.exports = WhiteCard;
