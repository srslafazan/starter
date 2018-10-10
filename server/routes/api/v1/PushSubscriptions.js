const router = require('express').Router();
const logger = require('@/constructors/logger');
const sjcl = require('sjcl')

// Example PushNotification
// {
//   "endpoint":"https://fcm.googleapis.com/fcm/send/e4cnXG2cNmI:APA91bFlBtr0ZsOYFYy-M6CTzMkbXuwSWvmTidK5v9WHozLD1z2SAiUOA7XrTSEZlERWoXSUiVv18u8NkJ9F1BX_mIP0MUbkBaGc1QCcBStjPgFgqSzc4G67cj7PaXCn5bfNbZfAiF2Y",
//   "expirationTime": null,
//   "keys":{
//     "p256dh":"BOsT3e5-3OpBtT4Fd-ykTv1cn_PEIXIJyA4shIRUSx6wbnZR1wD0MZbo5eGCMc-KV9Wf1RhOttrZe0Dl20nF3NA",
//     "auth":"-RvZx027bOfwZVSqXzbcJg"
//   }
// }

module.exports = ({ sequelize, models }) => {
  const { PushSubscriptions } = models;

  router.post('/', async (req, res) => {
    if (!req.body.subscription) res.status(500).json({
      error: 'Parameter subscription must be provided.',
    });
    try {
      const { subscription } = req.body
      if (!subscription) return res.status(500).json({ error: 'Parameter subscription must be provided.' });
      const hash = sjcl.encrypt(process.env.PUSH_SUBSCRIPTION_ENCRYPTION_KEY, JSON.stringify(subscription))
      const [subscriptionFromDB, created] = await PushSubscriptions.findOrCreate({ where: { hash } })
      return res.status(200).send(subscriptionFromDB.get({ plain: true }));
    } catch (e) {
      console.error(e)
      return res.status(500).json({ error: 'An error occurred while fetching PushSubscriptions.' });
    }
  });

  return router; 
};
