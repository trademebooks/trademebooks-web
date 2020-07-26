var mongoose = require('mongoose');
const keys = require('../config');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
require('../models/Message');
const Message = mongoose.model('message');

let messages = [
    new Message({
        from_user_id: "1",
        to_user_id: "2",
        message_body: "hey dude",
        timestamp: "Jan 7, 2020",
    }),
    new Message({
        from_user_id: "1",
        to_user_id: "2",
        message_body: "what is up dude",
        timestamp: "Jan 7, 2020",
    }),
    new Message({
        from_user_id: "1",
        to_user_id: "3",
        message_body: "this is another message",
        timestamp: "Jan 7, 2020",
    }),
];

(async function () {
    await Message.deleteMany({});
    console.log("truncated the messages table");

    var done = 0;
    for (let i = 0; i < messages.length; i++) {
        messages[i].save(function (err, result) {
            if (err) {
                console.log(err);
            }
            done++;
            if (done === messages.length) {
                exit();
            }
        });
    }
})();


function exit() {
    mongoose.disconnect();
    console.log("Seeding Messages Done!");
}