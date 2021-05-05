const faker = require('faker')
const Book = require('../../domain/models/book.model')

const bookFactory = async (users, numberOfBooks) => {
  const books = []

  for (const user of users) {
    for (let i = 1; i <= numberOfBooks; i++) {
      const bookFields = {
        userId: user.id,
        title: faker.lorem.words(),
        description: faker.lorem.sentences(Math.round(Math.random(0, 5) * 5)),
        authors: [
          faker.lorem.words(),
          faker.lorem.words(),
          faker.lorem.words()
        ].slice(0, Math.round(Math.random(0, 3) * 3)),
        location: `${faker.address.city()}, ${faker.address.county()}`,
        price: faker.random.number(500),
        edition: Math.round(Math.random(0, 5) * 5),
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
        condition: ['POOR', 'FAIR', 'GOOD', 'VERY_GOOD', 'LIKE_NEW'][
          Math.round(Math.random() * 4)
        ],
        isbn_10: '0123456789',
        isbn_13: '0123456789012',
        date_posted: new Date()
      }

      const book = await new Book(bookFields).save()

      books.push(book)
    }
  }

  return books
}

module.exports = bookFactory
