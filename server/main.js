/*
 * Server (Gateway) - Bootstrap
**/

const http = require('http')
const SocketIO = require('socket.io');

const postgres = require('@/constructors/postgres');
const openrecord = require('@/constructors/openrecord');
const Express = require('@/constructors/Express');
const logger = require('@/constructors/logger');
const packageJson = require('@/package.json');
const routes = require('@/routes')
const PORT = process.env.PORT || 8000;

const app = Express();
const express = http.createServer(app);
const io = SocketIO(express);

app.use('/', routes);

console.log(`Bootstrapping Server (Gateway) ... (${Date.now()})`)

const run = async () => {
  io.on('connection', socket => {
    console.log(`[Socket] connection. socket.id: ${socket.id}`);
    socket.on('event', data => {
      console.log('[Socket] event. data: ', data)
    });
    socket.on('disconnect', reason => {
      console.log(`[Socket] disconnect. reason: ${reason}`)
    });
  });

  express.listen(PORT, async () => {
    console.log(`API version ${packageJson.version}, listening on port ${PORT}`)
    const postgresClient = await postgres();
  });
}

module.exports.run = run;
module.exports.express = express;
module.exports.io = io;
