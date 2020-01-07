const mongoose = require('mongoose');
const Book = mongoose.model('book');

module.exports = app => {

    /**
     * Get all the books via a search query filter - filter for now only by name/title of the book
     */
    app.get('/api/books', (req, res) => {
        // need a search query here /api/books?q=
        //res.json(Book.fetch());
    });

    /**
     * Get the currently authenticated user's books
     */
    app.get('/books/auth', (req, res) => {
        //res.json(Book.fetch()); // filter onl on req.user.id
    });

    /**
     * Gets a book by id
     */
    app.get('/books/:book_id', (req, res) => {
        res.json(Book.findOne(book_id));
    });

    /**
     * Add a new book listing
     */
    app.post('/api/books', async (req, res) => {
        const { title, subject, body, recipients } = req.body;
        const book = new Book({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
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

};