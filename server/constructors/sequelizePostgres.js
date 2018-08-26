const Sequelize = require('sequelize');

const {
  database,
  host,
  user,
  password,
} = require('../constants/postgres')


const sequelizePostgres = new Sequelize(
  database,
  user,
  password,
  {
    host,
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

    operatorsAliases: Sequelize.Op,
  }
);

module.exports = sequelizePostgres;
