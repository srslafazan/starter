const apolloServerExpress = require('./apollo-server-express')


module.exports.run = ({ app }) => {
  apolloServerExpress.applyMiddleware({ app })
  console.log(`🚀  Bootstrapping ApolloServerExpress middleware.`)
  return [app, apolloServerExpress]
}
