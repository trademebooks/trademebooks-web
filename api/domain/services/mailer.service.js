const keys = require('../config/keys');

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(keys.sendGridKey);

const sendMail = (message) => {
    const message = {
        to: 'yichenzhu1337@gmail.com',
        from: 'yichen@trademebooks.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: `<strong>and easy to do anywhere, even with Node.js</strong>`,
    };
    sendGridMail.send(message);
}

module.exports = sendMail;