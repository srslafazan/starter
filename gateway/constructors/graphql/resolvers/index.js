
const resolvers = ({ db }) => { // TODO: injection
  return {
    hello: () => {
      return 'Hello world!';
    },
    world: () => {
      return { id: 1 };
    },
    users: () => {
      return []
    },
    me: () => {
      return {
        id: 1,
        firstName: 'Shain',
        lastName: 'Lafazan',
      }
    }
  }
}

module.exports = resolvers;
