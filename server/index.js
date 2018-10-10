/*
 * Server (Gateway) - Entry
**/

require('module-alias/register');
process.env.PUSH_SUBSCRIPTION_ENCRYPTION_KEY = process.env.PUSH_SUBSCRIPTION_ENCRYPTION_KEY || 'push_subscription_key'

const run = require('./main.js');

run();
