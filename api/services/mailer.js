const keys = require('../config/keys');

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(keys.sendGridKey);
const msg = {
    to: 'yichenzhu1337@gmail.com',
    from: 'yichen@trademebooks.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<strong>and easy to do anywhere, even with Node.js</strong>`,
};
sgMail.send(msg);