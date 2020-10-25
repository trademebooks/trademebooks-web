const faker = require('faker')
const db = require('../utils/db')
require('../domain/models/book.model')

const numberOfBooksPerUser = 10
let books = []

module.exports = async (users) => {
  const dbConnection = await db()
  const Book = dbConnection.model('book')

  await Book.deleteMany({})

  books = [
    ...[
      new Book({
        userId: '5e11e9d8eded1d23742c1c6d',
        title: 'Book #1 - Air',
        description:
          'This is a great description fo the book. test. search. query. air here.',
        authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
        condition: 'Good',
        location: 'UofT',
        price: 100,
        edition: 1,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
        condition: [
          'POOR',
          'FAIR',
          'GOOD',
          'VERY_GOOD',
          'LIKE_NEW'
        ][Math.round(Math.random() * 4)],
        date_posted: 'Jan 7, 2020'
      }),
      new Book({
        userId: '5e11e9d8eded1d23742c1c6d',
        title: 'Book #2 - Water',
        description:
          'This is a great description fo the book. air here as well.',
        authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
        condition: 'Good',
        location: 'UofT',
        price: 100,
        edition: 1,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
        condition: [
          'POOR',
          'FAIR',
          'GOOD',
          'VERY_GOOD',
          'LIKE_NEW'
        ][Math.round(Math.random() * 4)],
        date_posted: 'Jan 7, 2020'
      }),
      new Book({
        userId: '5e11e9d8eded1d23742c1c6d',
        title: 'Book #3 - Earth',
        description: 'This is a great description fo the book.',
        authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
        condition: 'Good',
        location: 'UofT',
        price: 100,
        edition: 1,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
        condition: [
          'POOR',
          'FAIR',
          'GOOD',
          'VERY_GOOD',
          'LIKE_NEW'
        ][Math.round(Math.random() * 4)],
        date_posted: 'Jan 7, 2020'
      }),
      new Book({
        userId: '5e11e9d8eded1d23742c1c6d',
        title: 'Book #4 - Fire',
        description: 'This is a great description fo the book.',
        authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
        condition: 'Good',
        location: 'UofT',
        price: 100,
        edition: 1,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
        condition: [
          'POOR',
          'FAIR',
          'GOOD',
          'VERY_GOOD',
          'LIKE_NEW'
        ][Math.round(Math.random() * 4)],
        date_posted: 'Jan 7, 2020'
      }),
      new Book({
        userId: '5e11e9d8eded1d23742c1c6d',
        title: 'Book #5 - Legend of Korra',
        description: 'This is a great description fo the book.',
        authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
        condition: 'Good',
        location: 'UofT',
        price: 100,
        edition: 1,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
        condition: [
          'POOR',
          'FAIR',
          'GOOD',
          'VERY_GOOD',
          'LIKE_NEW'
        ][Math.round(Math.random() * 4)],
        date_posted: 'Jan 7, 2020'
      }),
      new Book({
        userId: '5e11e9d8eded1d23742c1c6d',
        title: 'Book #6- Air',
        description: 'This is a great description fo the book.',
        authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
        condition: 'Good',
        location: 'UofT',
        price: 100,
        edition: 1,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
        condition: [
          'POOR',
          'FAIR',
          'GOOD',
          'VERY_GOOD',
          'LIKE_NEW'
        ][Math.round(Math.random() * 4)],
        date_posted: 'Jan 7, 2020'
      }),
      new Book({
        userId: '5e11e9d8eded1d23742c1c6d',
        title: 'Book #7 - Air',
        description: 'This is a great description fo the book.',
        authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
        condition: 'Good',
        location: 'UofT',
        price: 100,
        edition: 1,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
        condition: [
          'POOR',
          'FAIR',
          'GOOD',
          'VERY_GOOD',
          'LIKE_NEW'
        ][Math.round(Math.random() * 4)],
        date_posted: 'Jan 7, 2020'
      })
    ]
  ]
  for (const book of books) {
    await new Book(book).save()
  }

  for (const user of users) {
    for (let i = 1; i <= numberOfBooksPerUser; i++) {
      const book = {
        userId: user.id,
        title: faker.lorem.words(),
        description: faker.lorem.sentences(Math.round(Math.random(0, 5) * 5)),
        authors: [
          faker.lorem.words(),
          faker.lorem.words(),
          faker.lorem.words()
        ].slice(0, Math.round(Math.random(0, 3) * 3)),
        condition: ['Poor', 'Fair', 'Good', 'Very Good', 'Like New'][
          Math.round(Math.random(0, 4)) + 1
        ],
        location: `${faker.address.city()}, ${faker.address.county()}`,
        price: faker.random.number(500),
        edition: Math.round(Math.random(0, 5) * 5),
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
        condition: [
          'POOR',
          'FAIR',
          'GOOD',
          'VERY_GOOD',
          'LIKE_NEW'
        ][Math.round(Math.random() * 4)],
        date_posted: new Date()
      }

      books.push(book)

      await new Book(book).save()
    }
  }

  await dbConnection.disconnect()

  return users
}
