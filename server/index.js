const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const expressSession = require('express-session')
const cors = require('cors');
const morgan = require('morgan');

const connectToPostgres = require('./constructors/connectToPostgres');
const logger = require('./constructors/logger');

const packageJson = require('./package.json');

const app = express();

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
}));

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));

const PORT = 8000;

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, './views'))

app.use(express.static(path.resolve(__dirname, './public')))
app.use(express.static(path.resolve(__dirname, '../client/dist')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors());
app.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


app.get('/health', function(req, res, next) {
  res.send({ healthy: true })
})

app.get('/version', function(req, res, next) {
  res.send({ version: packageJson.version })
})

app.get('*', function (req, res) {
  logger.debug('Debug statement');
  logger.info('Info statement');
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});


const start = async () => {
  http.createServer(app).listen(PORT, async () => {
    console.log(`API version ${packageJson.version}, listening on port ${PORT}`)

    try {
     connectToPostgres()
    } catch(e) {
      console.warn('Error,', e);
    }
  })
}

start()

