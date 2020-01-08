var mongoose = require('mongoose');
const keys = require('../config/keys');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
require('../models/Book');
const Book = mongoose.model('book');

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
        image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
        date_posted: "Jan 7, 2020",
    }),
];

Book.deleteMany({}, function () {
    console.log("truncated the books table");
    var done = 0;
    for (var i = 0; i < books.length; i++) {
        books[i].save(function (err, result) {
            if (err) {
                console.log(err);
            }
            done++;
            if (done === books.length) {
                exit();
            }
        });
    }
});

function exit() {
    mongoose.disconnect();
    console.log("Seeding Books Done!");
}