const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};


module.exports = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
})
