const me = require('./me')

const resolvers = {
  Query: {
    users: async (_, $, { req, res, sequelize, models }) => {
      return await models.Users.findAll({ raw: true })
    },
    me,
  },
};

module.exports = resolvers
