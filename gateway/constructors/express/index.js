const http = require('http')
const Express = require('./express')
const { packages, options } = require('@/config')
const PORT = process.env.PORT || packages.express.port || 8000;

const startExpressServer = async () => {
  const app = await Express()
  if (packages.express.apollo) {
    const apolloServer = require('./apollo-server-express')
    apolloServer.run({ app })
  }
  // TODO - https://www.npmjs.com/package/express-swagger-generator, https://github.com/pgroot/express-swaggerize-ui
  return [http.createServer(app), app]
}

const run = async () => {
  const [server, app] = await startExpressServer()

  if (packages.express.apollo) {
    require('./apollo-server-express/apollo-server-express').installSubscriptionHandlers(server)
  }
  if (packages.express.sockets) {
    const io = require('@/constructors/Sockets')(server);
    io.on('connection', socket => {
      console.log(`[Socket] connection. socket.id: ${socket.id}`);
      socket.on('event', data => {
        console.log('[Socket] event. data: ', data)
      });
      socket.on('disconnect', reason => {
        console.log(`[Socket] disconnect. reason: ${reason}`)
      });
    });
  }

  server.listen(PORT, async () => {
    console.log(`Express server listening on port ${PORT}`)
    console.log(`${server.graphqlPath}`)
    if (packages.express.postgres) {
      await require(`@/constructors/postgres`)();
    }
  });

  return server
}

module.exports.express = startExpressServer
module.exports.run = run
