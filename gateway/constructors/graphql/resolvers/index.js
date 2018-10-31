
const resolvers = ({ db }) => { // TODO: injection
  return {
    hello: () => {
      return 'Hello world!';
    },
    users: () => {
      return []
    },
  }
}

module.exports = resolvers;
