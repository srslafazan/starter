const { Client } = require('pg');

const { waitForConnection } = require('@/utils')

const {
  url,
} = require('@/constants/postgres')

const run = () => waitForConnection({
  connect: async () => {
    console.log('Connecting to postgres...');
    const client = new Client({ connectionString: url });
    const pgInterface = await client.connect();
    return pgInterface;
  },
  onError(e) {
    console.error('Error connecting to postgres', e)
  },
})

module.exports.run = run;
