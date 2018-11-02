const resolvers = {
  Query: {
    users: async (_, $, { req, res, sequelize, models }) => {
      return await models.Users.findAll({ raw: true })
    },
  },
};

module.exports = resolvers
