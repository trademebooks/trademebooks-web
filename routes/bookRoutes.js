const mongoose = require('mongoose');
const Book = mongoose.model('book');
const Settings = mongoose.model("settings")

module.exports = app => {

    /**
     * Get all the books via a search query filter - filter for now only by name/title of the book
     *
     *  GET /api/books?search=
     */
    app.get('/api/books', async(req, res) => {
        if (req.query.search) {
            let books = await Book.find({
                title: new RegExp(req.query.search, "i")
            });
            console.log(books)
            res
                .status(200)
                .json(books);
        } else {}
    });

    /**
     * Get the currently authenticated user's books
     */
    app.get('/api/books/auth', async(req, res) => {
        console.log(req.user._id);
        let books = await Book.find({user_id: req.user.id});
        console.log(books)
        res
            .status(200)
            .json(books);
    });

    /**
     * Gets a book by id
     */
    app.get('/api/books/:book_id', async(req, res) => {
        let book = await Book.findOne(req.param.book_id);
        res
            .status(200)
            .json(book);
    });

    /**
     * Add a new book listing
     */
    app.post('/api/books', async(req, res) => {
        const {
            bookTitle,
            bookAuthors,
            bookImage,
            bookPublishedDate,
            bookPublisher,
            bookPrice,
            bookLocationForMeet
        } = req.body;

        // req.user.id

        console.log(req.user);
        const book = new Book({
            user_id: req.user.id,
            //user_id: "user_id_1",
            title: bookTitle,
            description: "",
            authors: bookAuthors,
            condition: "good",
            location: bookLocationForMeet,
            price: bookPrice,
            image: bookImage,
            date_posted: "Jan 1, 1970",
            publisher_date: bookPublishedDate,
            publisher: bookPublisher
        });

        try {
            await book.save();
            res
                .status(201)
                .json(book);
            console.log("SAVED BOOKED", book)
        } catch (err) {
            res
                .status(422)
                .send(err);
        }
    });

    /**
     * Update an existing book listing
     */
    app.put('/api/books/:book_id', async(req, res) => {});

    /**
     * Delete an existing book listing
     */
    app.delete('/api/books/:book_id', async(req, res) => {});
    /**
     * update settings for current auth user
     *
    */
    app.post('/api/settings', async(req, res) => {
        let settings = await Settings.find({user_id: req.user.id});
        console.log(settings)
        if (!settings) {
            setting = new Settings({user_id: req.user.id, receiveEmail_1: false, receiveTexts_1: false});
            try {
                await Settings.save();
                res
                    .status(201)
                    .json(book);
            } catch (err) {
                res
                    .status(422)
                    .send(err);
            }
        } else {
            const {receiveEmail_1, receiveTexts_1} = req.body;
            console.log(req.body)
            console.log(req.user.id)
            try {
                await Settings.updateOne({
                    user_id: req.user.id
                }, {
                    receiveEmail_1: receiveEmail_1,
                    receiveTexts_1: receiveTexts_1
                });
                res
                    .status(200)
                    .send(req.body)
            } catch (err) {
                res
                    .status(422)
                    .send(err);
            }
        }
    })
    /**
     * get settings for current auth user
     *
    */
    app.get('/api/settings', async(req, res) => {
        let settings = await Settings.find({user_id: req.user.id});
        res
            .status(200)
            .json(settings);
    })

};