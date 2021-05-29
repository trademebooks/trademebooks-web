// Delete in the passwords table that are more than 30 minutes
const moment = require('moment')
const Password = require('../api/domain/models/password.model')

const db = require('../api/utils/db')
const olderThan = moment().subtract(30, 'minutes').toDate()

const init = async () => {
  const dbConnection = await db()

  try {
    await Password.find({ tokenExpiresAt: { $lte: olderThan } })
      .remove()
      .exec()
    console.log('Documents Removed Successfully')
    console.log('Cleared the passwords table, success.')
    await dbConnection.disconnect()
  } catch (err) {
    console.error('Cleared the passwords table, failed.')
    console.error(err)
    await dbConnection.disconnect()
  }
}

init()
