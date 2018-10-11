const router = require('express').Router();
const logger = require('@/constructors/logger');
const { sendNotification } = require('@/constructors/webpush');
const sjcl = require('sjcl')


module.exports = ({ sequelize, models }) => {
  const { PushSubscriptions } = models;

  router.get('/send', async (req, res) => {
    const subscription = await PushSubscriptions.findOne({ where: { id: 1 } });
    sendNotification(subscription, 'hello world')
    return res.status(200).end();
  });

  router.post('/', async (req, res) => {
    if (!req.body.subscription) res.status(500).json({
      error: 'Parameter subscription must be provided.',
    });
    try {
      const { subscription } = req.body
      if (!subscription) return res.status(500).json({ error: 'Parameter subscription must be provided.' });
      const hash = JSON.stringify(sjcl.hash.sha256.hash(JSON.stringify(subscription)))
      const [subscriptionReturned, created] = await PushSubscriptions.findOrCreate({ where: { hash }, defaults: { subscription } })
      return res.status(200).send({ message: `Subscription ${created ? 'created' : 'found'}.` });
    } catch (e) {
      console.error(e)
      return res.status(500).json({ error: 'An error occurred while fetching PushSubscriptions.' });
    }
  });

  return router; 
};
