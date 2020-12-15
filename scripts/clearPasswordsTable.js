// delete in the passwords table that are more than 30 minutes
const moment = require('moment')
const Password = require('../api/domain/models/password.model')

var older_than = moment().subtract(30, 'minutes').toDate()

Password.find({ tokenExpiresAt: { $lte: older_than } })
  .remove()
  .exec()
  .then((RemoveStatus) => {
    console.log('Documents Removed Successfully')
    console.log('Cleared the passwords table, success.')
  })
  .catch((err) => {
    console.error('Cleared the passwords table, failed.')
    console.error(err)
  })
