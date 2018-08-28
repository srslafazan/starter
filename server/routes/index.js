const path = require('path');
const router = require('express').Router();
const sequelize = require('../constructors/sequelizePostgres');
const logger = require('../constructors/logger');
const APIRouter = require('./api');

router.use('/api', APIRouter);

router.get('/health', function(req, res, next) {
  res.send({ healthy: true })
})

router.get('/version', function(req, res, next) {
  res.send({ version: packageJson.version })
})

router.get('*', function (req, res) {
  logger.debug('Debug statement');
  logger.info('Info statement');
  console.log(req);
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});

module.exports = router;
