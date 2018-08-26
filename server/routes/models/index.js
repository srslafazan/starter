const models = require('express').Router();

models.get('/', (req, res) => {console.log('/models');res.status(200).json({connected: true})});

module.exports = models;
