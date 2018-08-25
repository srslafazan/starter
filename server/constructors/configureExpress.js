const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const cors = require('cors');
const morgan = require('morgan');

const configureExpress = (app) => {
  app.use(morgan('dev', {
    skip: (req, res) => res.statusCode < 400,
    stream: process.stderr,
  }));

  app.use(morgan('dev', {
      skip: (req, res) => res.statusCode >= 400,
      stream: process.stdout,
  }));

  app.set('view engine', 'ejs')
  app.set('views', path.resolve(__dirname, '../views'))

  app.use(express.static(path.resolve(__dirname, '../public')))
  app.use(express.static(path.resolve(__dirname, '../../client/dist')))

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(cors());
  app.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

  return app
}

module.exports = configureExpress;
