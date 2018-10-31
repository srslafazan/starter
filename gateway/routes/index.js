const path = require('path');
const cors = require('cors');
const router = require('express').Router();
const sequelize = require('@/constructors/sequelize');
const APIRouter = require('./api');

if (process.env.NODE_ENV === 'development') {
  router.use('/api', cors(), APIRouter);
} else {
  router.use('/api', APIRouter);
}

router.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '@client/dist/index.html'));
});


module.exports = router;
