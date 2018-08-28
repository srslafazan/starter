require('module-alias/register');
const SequelizeAuto = require('sequelize-auto');

const {
  host,
  dialect,
  database,
  user,
  password,
  port,
} = require('@/constants/postgres');

const auto = new SequelizeAuto(database, user, password, {
  host,
  dialect,
  port,
});

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
