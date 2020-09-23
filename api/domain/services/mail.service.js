const config = require('../config');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendGridKey);

const sendMail = async (message) => {
    return await sgMail.send({
        to: config.contactUsEmail,
        from: message.email,
        subject: 'trademebooks.com Contact Us Form!',
        text: message.body
    });
}

module.exports = {
    sendMail
};