const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Book');
require('./models/Message');
require('./models/Settings')
require('./services/passport');

const app = express();

const socketio = require('socket.io');
const cors = require('cors');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/bookRoutes')(app);
require('./routes/testRoutes')(app);
require('./routes/messageRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets like our main.js file, or main.css
    // file!
    app.use(express.static('client/build'));

    // Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000; // heroku injects the port into our app
const server = app.listen(PORT, () => {
    console.log("backend server listening on PORT:", 5000);
});

////////////////////////////////////////////////////////////////////////////////
///// Sockets: gotta change this later...
(function () {
    const io = socketio(server);
    const users = [];

    const addUser = ({id, name, room}) => {
        name = name
            .trim()
            .toLowerCase();
        room = room
            .trim()
            .toLowerCase();

        const existingUser = users.find((user) => user.room === room && user.name === name);

        if (!name || !room) 
            return {error: 'Username and room are required.'};
        if (existingUser) 
            return {error: 'Username is taken.'};
        
        const user = {
            id,
            name,
            room
        };

        users.push(user);

        return {user};
    };

    const removeUser = (id) => {
        const index = users.findIndex((user) => user.id === id);

        if (index !== -1) 
            return users.splice(index, 1)[0];
        };
    
    const getUser = (id) => users.find((user) => user.id === id);

    const getUsersInRoom = (room) => users.filter((user) => user.room === room);

    module.exports = {
        addUser,
        removeUser,
        getUser,
        getUsersInRoom
    };

    /////////////// Web Socket - socket.io setup
    io.on('connect', (socket) => {
        console.log('made the connection');

        socket.on('join', ({
            name,
            room
        }, callback) => {

            console.log(`the user ${name} has joined room ${room}`);

            const {error, user} = addUser({id: socket.id, name, room});

            if (error) 
                return callback(error);
            
            socket.join(user.room);

            socket.emit('message', {
                user: 'admin',
                text: `${user.name}, welcome to room ${user.room}.`
            });
            socket
                .broadcast
                .to(user.room)
                .emit('message', {
                    user: 'admin',
                    text: `${user.name} has joined!`
                });

            io
                .to(user.room)
                .emit('roomData', {
                    room: user.room,
                    users: getUsersInRoom(user.room)
                });

            callback();
        });

        socket.on('sendMessage', (message, callback) => {
            const user = getUser(socket.id);

            io
                .to(user.room)
                .emit('message', {
                    user: user.name,
                    text: message
                });

            callback();
        });

        socket.on('disconnect', () => {
            const user = removeUser(socket.id);

            if (user) {
                io
                    .to(user.room)
                    .emit('message', {
                        user: 'Admin',
                        text: `${user.name} has left.`
                    });
                io
                    .to(user.room)
                    .emit('roomData', {
                        room: user.room,
                        users: getUsersInRoom(user.room)
                    });
            }
        })
    });
})();