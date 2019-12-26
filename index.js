const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

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

const PORT = process.env.PORT || 5000; // heroku injects the port into our app

app.listen(PORT);