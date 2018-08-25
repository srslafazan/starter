const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const cors = require('cors');

const connectToPostgres = require('./utils/connectToPostgres');
const packageJson = require('./package.json');

const app = express();

const PORT = 8000;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


app.get('/health', function(req, res, next) {
  res.send({ healthy: true })
})

app.get('/version', function(req, res, next) {
  res.send({ version: packageJson.version })
})

app.get('/', function (req, res) {
  res.render('../client/dist/index.html');
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

