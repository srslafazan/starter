const path = require('path');
const cors = require('cors');
const router = require('express').Router();
const APIRouter = require('./api');

if (process.env.NODE_ENV === 'development') {
  router.use('/api', cors(), APIRouter);
} else {
  router.use('/api', APIRouter);
}

router.get('/api/*', function (req, res) {
  res.status(404).send();
});

router.get('/', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, '../../../static/index.html'));
});


module.exports = router;
