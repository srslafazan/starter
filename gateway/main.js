/*
 * Server (Gateway) - Bootstrap
**/

// const openrecord = require('@/constructors/openrecord')
const packageJson = require('@/package.json')
const { packages, options } = require('@/config')

const run = async () => {
  console.log(`Bootstrapping Server (Gateway) version ${packageJson.version} ... (${Date.now()})`)
  const server = await require(`@/constructors/${options.server}`).run();
}

module.exports.run = run;
