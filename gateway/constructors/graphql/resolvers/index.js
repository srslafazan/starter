
const resolvers = ({ db }) => { // TODO: injection
  return {
    hello: () => {
      return 'Hello world!';
    },
    world: () => {
      return 'Hello world 2!';
    },
    users: () => {
      return []
    },
  }
}

module.exports = resolvers;
