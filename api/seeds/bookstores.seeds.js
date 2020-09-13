let mongoose = require("mongoose");
const keys = require("../config");

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

require('../domain/models/bookstore.model');
require('../domain/models/user.model');

const Bookstore = mongoose.model('bookstore');
const User = mongoose.model('user');

let user = {
    _id: "5e11e9d8eded1d23742c1c6d",
    googleId: "110603409234402153901",
    first_name: "Yi Chen",
    last_name: "Zhu",
    email: "yichenzhu1337@gmail.com",
    password: 'yichen',
    username: 'yichen'
};

let bookstores = [
    new Bookstore({
        userId: "5e11e9d8eded1d23742c1c6d",
        username: "yichen",
        location: "19 Prince Edward Way, PEI, Canada",
        school: "UPEI"
    })
];

(async function () {
    await Bookstore.deleteMany({});
    await User.deleteMany({});
    console.log("truncated the bookstore, users table");

    let user1 = await new User(user).save();
    console.log("user1: ", user1);

    let new_bookstores = bookstores.map((bookstore) => {
        bookstore.user_id = user1._id;
        return bookstore;
    });
    console.log(new_bookstores);

    let done = 0;
    for (let i = 0; i < new_bookstores.length; i++) {
        new_bookstores[i].save(function (err, result) {
            if (err) {
                console.log(err);
            }
            done++;
            if (done === bookstores.length) {
                exit();
            }
        });
    }
})();


function exit() {
    mongoose.disconnect();
    console.log("Seeding Bookstores Done!");
}