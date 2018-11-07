const { ApolloServer } = require('apollo-server-express');
const { sequelize, models } = require('@/constructors/sequelize');
const { packages } = require('@/config')

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { sessionFromRequest } = require('@/utils');

const apolloServerExpress = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    const user = sessionFromRequest({}, req);
    return {
      req,
      res,
      redis: packages.express.redis ? require('@/constructors/redis') : null,
      sequelize,
      models,
      session: { user },
    }
  }
});

module.exports = apolloServerExpress;
