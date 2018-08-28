const routes = require('express').Router();
const packageJson = require('../package.json');


routes.get('/health', function(req, res, next) {
  res.send({ healthy: true })
})

routes.get('/version', function(req, res, next) {
  res.send({ version: packageJson.version })
})

routes.get('*', function (req, res) {
  logger.debug('Debug statement');
  logger.info('Info statement');
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});

module.exports = routes;
