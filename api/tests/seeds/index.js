const dbUtils = require('../utils/index')
const db = require('../../utils/db')

const init = (async () => {
  console.log('Database seeds started...')

  const dbConnection = await db()

  await dbUtils.clearDatabase()

  const users = await require('./users.seeds')(10)
  await require('./books.seeds')(users, 10)
  const conversations = await require('./chat/conversations.seeds')(users)
  await require('./chat/messages.seeds')(conversations, users)
  await require('./chat/globalMessages.seeds')()

  await dbConnection.disconnect()

  console.log('Database seeds completed...')
})()

module.exports = init
