const keys = require('../config/keys');

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACaf602a3c1207efe0343de5c9130a3340';
const authToken = 'b20ac9f89c3a16bc8699274e06ea5c8a';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+4162932507',
        to: '+4168561988'
    })
    .then(message => console.log(message.sid));
