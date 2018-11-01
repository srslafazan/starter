const apolloServer = require('./apollo-server')


module.exports.run = ({ app }) => {
  apolloServer.applyMiddleware({ app })

  apolloServer.installSubscriptionHandlers(server)

  console.log(`🚀  Bootstrapping ApolloServer middleware.`)

  return [app, apolloServer]
}
