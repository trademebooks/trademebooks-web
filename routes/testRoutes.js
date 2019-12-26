module.exports = app => {
    app.get('/', (request, response) => {
        response.send({
            "message": "Hello World! This is a test!"
        });
    });

    app.get('/register-user', async (request, response) => {
        const User = mongoose.model('user');
        let user = await new User({googleId: 12345}).save();
        console.log(user);
        response.send(user);
    });
};