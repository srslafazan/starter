const path = require('path')
const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const { outLogger, errLogger } = require('@/constructors/logger')
const GraphQL = require('@/constructors/graphql');

const { sessionStore, session, EXPRESS_SESSION_SECRET } = require('./express-session');


module.exports = async ({ routes }) => {
  const app = express();

  app.set('view engine', 'ejs')
  app.set('views', path.resolve(__dirname, '../views'))
  app.use(express.static(path.resolve(__dirname, '../public')))
  app.use(express.static(path.resolve(__dirname, '../../client/dist')))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cookieParser(EXPRESS_SESSION_SECRET))
  app.use(cookieParser())
  app.use(outLogger)
  app.use(errLogger)
  app.disable('x-powered-by')
  app.use(session)

  sessionStore.sync()

  if (process.env.NODE_ENV === 'development') {
    app.use(cors());
    app.use('/graphql', cors(), await GraphQL({ context: {} }));
  } else {
    app.use('/graphql', await GraphQL({ context: {} }));
  }

  if (routes) app.use('/', routes);

  return app
}
