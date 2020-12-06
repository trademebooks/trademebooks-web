const mailer = require('../domain/services/mailer/mailer.service')

/**
 *
 * @param {*} user
 *
 * @returns boolean
 */
const userHasRegisteredEvent = ({ email, body, name }) => {
  let bodyText = `Hello ${name}. Thanks for registering!`
  return mailer.sendEmail({ email, subject: 'Welcome aboard!', bodyText })
}

module.exports = userHasRegisteredEvent
