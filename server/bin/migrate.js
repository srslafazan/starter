const { migrate } = require('postgres-migrations');
const Sequelize = require('sequelize');

const run = async () => {
  try {
    const sequelize = new Sequelize('database', 'username', 'password', {
      host: '127.0.0.1',
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

    await sequelize.sync({ logging: false });

    const db = {
      database: 'postgres',
      user: 'postgres',
      password: '',
      host: '127.0.0.1',
      port: 5432,
    };

    await migrate(db, './migrations');
    console.log('Migrations ran successfully');
  } catch (e) {
    console.error('Migrations failed', e);
    process.exit(1);
  }
};

run();
