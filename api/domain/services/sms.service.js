const keys = require('../config/keys');

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = keys.twilioKeys.accountSid, ;
const authToken = keys.twilioKeys.authToken;
const client = require('twilio')(accountSid, authToken);

const sendSms = () => {
    client.messages
        .create({
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            from: '+4162932507',
            to: '+4168561988'
        })
        .then(message => console.log(message.sid));
}

module.exports = {
    sendSms
};