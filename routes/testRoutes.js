const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = app => {
    app.get('/api/test', async (request, response) => {
        const existingUser = await User.findOne({googleId: "110603409234402153901"});

        console.log("existing user:", existingUser);

        response.send({
            "message": "Hello World! This is a test!",
            user: existingUser
        });
    });

    app.get('/api/register-user', async (request, response) => {
        const User = mongoose.model('user');
        let user = await new User({googleId: 12345}).save();
        console.log(user);
        response.send(user);
    });
};