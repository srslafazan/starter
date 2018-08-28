const router = require('express').Router();

module.exports = ({ sequelize }) => {
  // const { User } = sequelize.models;
  // console.log(sequelize.models);
  router.get('/', (req, res) => {
    console.log('return all users');
  });

  router.get('/:phone', (req, res) => {
    console.log('/:phone');
    // await User.findOne({ phone });
    return res.status(200).json({ phone: '123-456-7890' });
  });

  return router; 
};
