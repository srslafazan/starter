const { createDb, migrate } = require('postgres-migrations');
const Sequelize = require('sequelize');

const host = '127.0.0.1';
const port = 5432;
const database = defaultDatabase = 'postgres';
const user = 'postgres';
const password = process.env.POSTGRES_PASSWORD || 'password';

const run = async () => {
  try {
    const sequelize = new Sequelize(database, user, password, {
      host,
      dialect: 'postgres',

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },

      // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
      operatorsAliases: false
    });

    await sequelize.sync({ logging: true });

    await createDb(database, {
      defaultDatabase, // optional, default: 'postgres'
      user,
      password,
      host,
      port,
    })

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
