const { ApolloServer } = require('apollo-server-express');
const { sequelize, models } = require('@/constructors/sequelize');
const redis = require('@/constructors/redis');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { sessionFromRequest } = require('@/utils');

const apolloServerExpress = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    const user = await sessionFromRequest(redis, req);
    return {
      req,
      res,
      redis,
      sequelize,
      models,
      session: { user },
    }
  }
});

module.exports = apolloServerExpress;
