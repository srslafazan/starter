const { Client } = require('pg');

const {
  url,
} = require('../constants/postgres')

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const connectToPostgres = async (
  connectionString = url,
  attempts = 30,
  interval = 1000,
) => {
  if (attempts === 0) throw new Error('Failed to connect');

  console.log('Connecting to postgres...');

  try {
    const client = new Client({ connectionString });
    const pgInterface = await client.connect();
    return pgInterface;
  } catch (e) {
    console.error('Error connecting to postgres: ', e);
    await sleep(interval);
    return connectToPostgres(connectionString, attempts - 1, interval);
  }
};

module.exports = connectToPostgres;
