const path = require('path')
const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const { outLogger, errLogger } = require('@/constructors/logger')
const { packages } = require('@/config')

const { sessionStore, session, EXPRESS_SESSION_SECRET } = require('./express-session');


module.exports = async () => {
  const app = express();

  app.set('view engine', 'ejs')
  app.set('views', path.resolve(__dirname, './views'))
  app.use(express.static(path.resolve(__dirname, '../../public')))
  app.use(express.static(path.resolve(__dirname, '../../static')))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cookieParser(EXPRESS_SESSION_SECRET))
  app.use(cookieParser())
  app.use(outLogger)
  app.use(errLogger)
  app.disable('x-powered-by')

  if (packages.express['express-session']) {
    app.use(session)
    if (packages.express['express-session']['postgres']) sessionStore.sync()
  }

  if (packages.express['graphql-express']) {
    const GraphQL = require('./express-graphql');
    if (process.env.NODE_ENV === 'development') {
      app.use(cors());
      app.use('/graphql', cors(), await GraphQL({ context: {} }));
    } else {
      app.use('/graphql', await GraphQL({ context: {} }));
    }
  }

  if (packages.express.routes) app.use('/', require('./routes'));

  return app
}
