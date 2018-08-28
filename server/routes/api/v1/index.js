const router = require('express').Router();
const logger = require('../../../constructors/logger');
const sequelize = require('../../../constructors/sequelizePostgres');
const Users = require('./users');

router.use('/users', Users({ sequelize }));


module.exports = router;
