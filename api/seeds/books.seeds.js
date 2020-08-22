var mongoose = require('mongoose');
const keys = require('../config');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
require('../domain/models/book.model');
require('../domain/models/user.model');
const Book = mongoose.model('book');
const User = mongoose.model('user');

let user = {
    //_id: "5e11e9d8eded1d23742c1c6d",
    googleId: "110603409234402153901",
    first_name: "Yi Chen",
    last_name: "Zhu",
    // picture: "https://lh3.googleusercontent.com/-Y0wV1lZ8eno/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcklAbO227AZwxw1kMi4ZzWpoQ5-g/photo.jpg",
    email: "yichenzhu1337@gmail.com",
    password: 'yichen',
    username: 'yichen'
};

var books = [
    new Book({
        user_id: "1",
        title: "Book #1 - Air",
        description: "This is a great description fo the book.",
        authors: [
            "John Doe",
            "Jane Doe",
            "Henry The 3rd"
        ],
        condition: "Good",
        location: "UofT",
        price: 100,
        edition: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
        date_posted: "Jan 7, 2020",
    }),
    new Book({
        user_id: "1",
        title: "Book #2 - Water",
        description: "This is a great description fo the book.",
        authors: [
            "John Doe",
            "Jane Doe",
            "Henry The 3rd"
        ],
        condition: "Good",
        location: "UofT",
        price: 100,
        edition: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
        date_posted: "Jan 7, 2020",
    }),
    new Book({
        user_id: "1",
        title: "Book #3 - Earth",
        description: "This is a great description fo the book.",
        authors: [
            "John Doe",
            "Jane Doe",
            "Henry The 3rd"
        ],
        condition: "Good",
        location: "UofT",
        price: 100,
        edition: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
        date_posted: "Jan 7, 2020",
    }),
    new Book({
        user_id: "1",
        title: "Book #4 - Fire",
        description: "This is a great description fo the book.",
        authors: [
            "John Doe",
            "Jane Doe",
            "Henry The 3rd"
        ],
        condition: "Good",
        location: "UofT",
        price: 100,
        edition: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
        date_posted: "Jan 7, 2020",
    }),
    new Book({
        user_id: "1",
        title: "Book #5 - Legend of Korra",
        description: "This is a great description fo the book.",
        authors: [
            "John Doe",
            "Jane Doe",
            "Henry The 3rd"
        ],
        condition: "Good",
        location: "UofT",
        price: 100,
        edition: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
        date_posted: "Jan 7, 2020",
    }),
    new Book({
        user_id: "1",
        title: "Book #1 - Air",
        description: "This is a great description fo the book.",
        authors: [
            "John Doe",
            "Jane Doe",
            "Henry The 3rd"
        ],
        condition: "Good",
        location: "UofT",
        price: 100,
        edition: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
        date_posted: "Jan 7, 2020",
    }),
    new Book({
        user_id: "1",
        title: "Book #1 - Air",
        description: "This is a great description fo the book.",
        authors: [
            "John Doe",
            "Jane Doe",
            "Henry The 3rd"
        ],
        condition: "Good",
        location: "UofT",
        price: 100,
        edition: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
        date_posted: "Jan 7, 2020",
    }),
];

(async function () {
    await Book.deleteMany({});
    await User.deleteMany({});
    console.log("truncated the books table");

    let user1 = await new User(user).save();

    let new_books = books.map((book) => {
        book.user_id = user1._id;
        return book;
    });

    var done = 0;
    for (var i = 0; i < new_books.length; i++) {
        new_books[i].save(function (err, result) {
            if (err) {
                console.log(err);
            }
            done++;
            if (done === books.length) {
                exit();
            }
        });
    }
})();


function exit() {
    mongoose.disconnect();
    console.log("Seeding Books Done!");
}