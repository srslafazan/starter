const { createDb, migrate } = require('postgres-migrations');
const sequelizePostgres = require('../constructors/sequelizePostgres');

const {
  database,
  host,
  user,
  password,
  port,
} = require('../constants/postgres')

const run = async () => {
  try {
    await sequelizePostgres.sync({ logging: true });

    await createDb(database, {
      defaultDatabase: database, // optional, default: 'postgres'
      user,
      password,
      host,
      port,
    });

    await migrate({
      database,
      user,
      password,
      host,
      port,
    }, './migrations');

    console.log('Migrations ran successfully');
  } catch (e) {
    console.error('Migrations failed', e);
    process.exit(1);
  }
};

run();
