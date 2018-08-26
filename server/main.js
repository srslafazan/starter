/*
 * Server (Gateway) - Bootstrap
**/

const http = require('http')
const path = require('path')
const express = require('express')

const connectToPostgres = require('./constructors/connectToPostgres');
const configureExpress = require('./constructors/configureExpress');
const logger = require('./constructors/logger');

const packageJson = require('./package.json');

const routes = require('./routes')

const app = configureExpress(express());

const PORT = 8000;


app.use('/', routes);


const run = async () => {
  http.createServer(app).listen(PORT, async () => {
    console.log(`API version ${packageJson.version}, listening on port ${PORT}`)

    try {
      await connectToPostgres()
    } catch(e) {
      console.warn('Error connecting to postgres,', e);
    }
  })
}

module.exports = run;
