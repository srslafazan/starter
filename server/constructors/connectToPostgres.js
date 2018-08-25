const postgres = require('pg');
const logger = require('./logger');

const PG_URL = process.env.PG_URL || 'postgresql://postgres:password@127.0.0.1:5432/postgres';

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const connectToPostgres = async (
  connectionString = PG_URL,
  attempts = 30,
  interval = 1000,
) => {
  if (attempts === 0) throw new Error('Failed to connect');

  logger.info('Connecting to postgres...');

  const client = new postgres.Client({ connectionString });

  try {
    const pgInterface = await client.connect();
    logger.info('Connected to postgres.');
    return pgInterface;
  } catch (e) {
    console.error('Error connecting to postgres: ', e);
    await sleep(interval);
    return connectToPostgres(connectionString, attempts - 1, interval);
  }
};

module.exports = connectToPostgres;
