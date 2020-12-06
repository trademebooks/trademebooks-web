const dbUtils = require('../utils/index')
const db = require('../../utils/db')

const init = (async () => {
  console.log('Database seeds started...')

  const dbConnection = await db()

  dbUtils.clearDatabase()

  const users = await require('./users.seeds')(10)
  const books = await require('./books.seeds')(users, 10)
  const rooms = await require('./rooms.seeds')(users)
  const messages = await require('./messages.seeds')(rooms, users)

  await dbConnection.disconnect()

  console.log('Database seeds completed...')
})()

module.exports = init
