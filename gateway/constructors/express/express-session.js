const Session = require('express-session')
const Sequelize = require('sequelize')

const { sequelize } = require('@/constructors/sequelize');

const SequelizeStore = require('connect-session-sequelize')(Session.Store);
const EXPRESS_SESSION_SECRET = process.env.EXPRESS_SESSION_SECRET || 'keyboard cat'

const sessionStore = new SequelizeStore({
  db: sequelize,
  checkExpirationInterval: 15 * 60 * 1000, // 15 minutes. The interval to cleanup expired sessions (in milliseconds).
  expiration: 24 * 60 * 60 * 1000, // 1 day (milliseconds)
});

const session = Session({
  secret: EXPRESS_SESSION_SECRET,
  store: sessionStore,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV !== 'development',
  },
  resave: false, // we support the touch method so per the express-session docs this should be set to false
  proxy: true, // if you do SSL outside of node.
})


module.exports.sessionStore = sessionStore
module.exports.session = session
module.exports.EXPRESS_SESSION_SECRET = EXPRESS_SESSION_SECRET
