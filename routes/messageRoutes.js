const mongoose = require('mongoose');
const Message = mongoose.model('message');

module.exports = app => {

    /**
     * Get all the messages
     *
     *  GET /api/messages
     */
    app.get('/api/messages', async (req, res) => {
        let messages = await Message.find({});
        res.status(200).json(messages);
    });

};