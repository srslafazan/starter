const { ApolloServer, gql } = require('apollo-server-express');

module.exports = gql`
  type Book {
    title: String
    author: String
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    books: [Book]
    users: [User]
    me: User
  }
`
