const http = require('http')
const Express = require('./express')

module.exports = async ({ routes }) => {
  const app = await Express({ routes })
  return http.createServer(app)
}
