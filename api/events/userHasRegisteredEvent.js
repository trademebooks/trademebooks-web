const mailer = require('../domain/services/mail.service');

/**
 *
 * @param {*} user
 *
 * @returns boolean
 */
const userHasRegisteredEvent = ({ email, body, name }) => {
  let bodyText = `Hello ${name}. Thanks for registering!`;
  return mailer.sendEmail(email, 'Welcome aboard!', bodyText);
};

module.exports = userHasRegisteredEvent;
