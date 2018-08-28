/*
 * Server (Gateway) - Bootstrap
**/

const http = require('http')

const postgres = require('@/constructors/postgres');
const Express = require('@/constructors/express');
const logger = require('@/constructors/logger');

const packageJson = require('@/package.json');

const routes = require('@/routes')

const app = Express();

const PORT = 8000;


app.use('/', routes);


const run = async () => {
  http.createServer(app).listen(PORT, async () => {
    console.log(`API version ${packageJson.version}, listening on port ${PORT}`)

    try {
      await postgres()
    } catch(e) {
      console.warn('Error connecting to postgres,', e);
    }
  })
}

module.exports = run;
