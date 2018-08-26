const routes = require('express').Router();

const root = require('./root');
const models = require('./models');

routes.use('/models', models);
routes.use('/', root);


module.exports = routes;
