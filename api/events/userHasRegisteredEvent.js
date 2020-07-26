const mailer = require('../utils/mailer');

/**
 * 
 * @param {*} user 
 * 
 * @returns boolean
 */
const userHasRegisteredEvent = (user) => {
  let bodyText = `Hello ${user.firstName}. Thanks for registering!`
  return mailer.sendEmailToUser(user.email, 'Welcome aboard!', bodyText);
}

module.exports = userHasRegisteredEvent;