const keys = require('../config/keys');

const accountSid = keys.twilioKeys.accountSid;
const authToken = keys.twilioKeys.authToken;
const client = require('twilio')(accountSid, authToken);

const sendSms = async (fromNumber, toNumber, messageBody) => {
  const message = await client.messages.create({
    body: messageBody,
    from: fromNumber,
    to: toNumber,
  });

  return message;
};

module.exports = {
  sendSms,
};
