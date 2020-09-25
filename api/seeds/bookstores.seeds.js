const faker = require('faker');
const db = require('../utils/db');
require('../domain/models/bookstore.model');

let bookstores = [];

module.exports = async (users) => {
  const dbConnection = await db();
  const Bookstore = dbConnection.model('bookstore');

  await Bookstore.deleteMany({});

  for (const user of users) {
    const bookstore = {
      userId: user._id,
      description: `Welcome to ${user.username}'s awesome store!`
    }
    const bookstoreReturnValue = await new Bookstore(bookstore).save();
    bookstores.push(bookstoreReturnValue);
  }

  await dbConnection.disconnect();

  return bookstores;
};