const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');


module.exports = async ({ context }) => {
  const readFile = promisify(fs.readFile);
  // Construct a schema, using GraphQL schema language
  const schema = buildSchema(await readFile(path.resolve(__dirname, './schema.graphql'), 'utf8'));

  // The rootValue provides a resolver function for each API endpoint
  return graphqlHTTP({
    schema,
    rootValue: require('./resolvers')({}),
    graphiql: process.env.NODE_ENV !== 'production',
    context: () => ({
      ...context, 
    }),
  })
}
