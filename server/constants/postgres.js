const host = '127.0.0.1';
const port = 5432;
const database = 'postgres';
const dialect = 'postgres';
const user = process.env.POSTGRES_USER || 'postgres';
const password = process.env.POSTGRES_PASSWORD || 'password';
const url = process.env.PG_URL || 'postgresql://postgres:password@127.0.0.1:5432/postgres';

module.exports = {
  host,
  port,
  database,
  dialect,
  password,
  url,
  user,
}
