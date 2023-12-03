const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const booking = sequelize.define('booking', {
  bookingId: {
   type: DataTypes.INTEGER,
   primaryKey: true,
   autoIncrement: true,
   allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telepon: {
    type: DataTypes.STRING,
    allowNull: false,
 },
  dateAt: {
    type: DataTypes.DATE,
    allowNull: false,
 },
 totalPrice: {
    type: DataTypes.STRING,
    allowNull: false,
 },
},{
      timestamps: true,
      tableName: 'booking',
});

module.exports = booking;