/*
 * Server (Gateway) - Entry
**/

require('module-alias/register');
process.env.PUSH_SUBSCRIPTION_ENCRYPTION_KEY = process.env.PUSH_SUBSCRIPTION_ENCRYPTION_KEY || 'push_subscription_key'
process.env.WEBPUSH_PRIVATE_KEY = process.env.WEBPUSH_PRIVATE_KEY || 'OqBphSyBCUjilRkj7fqMGzkaYRGlBg20OGwU4I11bUA'
process.env.WEBPUSH_PUBLIC_KEY = process.env.WEBPUSH_PUBLIC_KEY || 'BHEa09WcrSPva3MOvSIXlsGRqEVlfjOvVrT-S5_T__9U9uImayVsaa7xfT8d0Cx_5A3hBIV5lB7fiCsMWdbS5mE'

const run = require('./main.js');

run();
