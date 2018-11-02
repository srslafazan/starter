const { ApolloServer } = require('apollo-server-express');
const { sequelize, models } = require('@/constructors/sequelize');
const redis = require('@/constructors/redis');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const apolloServerExpress = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return {
      req,
      res,
      redis,
      sequelize,
      models,
    }
  }
});

module.exports = apolloServerExpress;
