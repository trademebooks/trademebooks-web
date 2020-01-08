const mongoose = require('mongoose');
const Book = mongoose.model('book');

module.exports = app => {

    /**
     * Get all the books via a search query filter - filter for now only by name/title of the book
     *
     *  GET /api/books?search=
     */
    app.get('/api/books', async (req, res) => {
        console.log(req.query.search);
        let books = await Book.find({title: new RegExp(req.query.search, "i")});
        res.status(200).json(books);
    });

    /**
     * Get the currently authenticated user's books
     */
    app.get('/api/books/auth', async (req, res) => {
        console.log(req.user._id);
        let books = await Book.find({user_id: req.user.id});
        res.status(200).json(books);
    });

    /**
     * Gets a book by id
     */
    app.get('/api/books/:book_id', async (req, res) => {
        let book = await Book.findOne(req.param.book_id);
        res.status(200).json(book);
    });

    /**
     * Add a new book listing
     */
    app.post('/api/books', async (req, res) => {
        const {title, subject, body, recipients} = req.body;
        const book = new Book({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({email: email.trim()})),
            user_id: req.user.id,
            dateSent: Date.now()
        });

        try {
            await book.save();
            res.send(book);
            res.status(201).json(book);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    /**
     * Update an existing book listing
     */
    app.put('/api/books/:book_id', async (req, res) => {

    });

    /**
     * Delete an existing book listing
     */
    app.delete('/api/books/:book_id', async (req, res) => {

    });

};