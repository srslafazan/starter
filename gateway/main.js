/*
 * Server (Gateway) - Bootstrap
**/

const postgres = require('@/constructors/postgres');
const openrecord = require('@/constructors/openrecord');
const Sockets = require('@/constructors/Sockets');
const routes = require('@/routes')
const packageJson = require('@/package.json');
const PORT = process.env.PORT || 8000;


const run = async () => {
  console.log(`Bootstrapping Server (Gateway) ... (${Date.now()})`)
  const express = await require('@/constructors/express')({ routes });
  const io = Sockets(express);

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
    await postgres();
  });
}

module.exports.run = run;
