const Book = require('../../domain/models/book.model')
const bookFactory = require('../factories/bookFactory')

const books = []

const customBooks = [
  {
    _id: '5fcb3a0b2090b488b562669a',
    userId: '5e11e9d8eded1d23742c1c6a',
    title: 'Book #1 - Air',
    description:
      'This is a great description fo the book. test. search. query. air here.',
    authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
    location: 'UofT',
    price: 100,
    edition: 1,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
    condition: ['POOR', 'FAIR', 'GOOD', 'VERY_GOOD', 'LIKE_NEW'][
      Math.round(Math.random() * 4)
    ],
    date_posted: 'Jan 7, 2020'
  },
  {
    userId: '5e11e9d8eded1d23742c1c6a',
    title: 'Book #2 - Water',
    description: 'This is a great description fo the book. air here as well.',
    authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
    location: 'UofT',
    price: 100,
    edition: 1,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
    condition: ['POOR', 'FAIR', 'GOOD', 'VERY_GOOD', 'LIKE_NEW'][
      Math.round(Math.random() * 4)
    ],
    date_posted: 'Jan 7, 2020'
  },
  {
    userId: '5e11e9d8eded1d23742c1c6a',
    title: 'Book #3 - Earth',
    description: 'This is a great description fo the book.',
    authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
    location: 'UofT',
    price: 100,
    edition: 1,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
    condition: ['POOR', 'FAIR', 'GOOD', 'VERY_GOOD', 'LIKE_NEW'][
      Math.round(Math.random() * 4)
    ],
    date_posted: 'Jan 7, 2020'
  },
  {
    userId: '5e11e9d8eded1d23742c1c6a',
    title: 'Book #4 - Fire',
    description: 'This is a great description fo the book.',
    authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
    location: 'UofT',
    price: 100,
    edition: 1,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
    condition: ['POOR', 'FAIR', 'GOOD', 'VERY_GOOD', 'LIKE_NEW'][
      Math.round(Math.random() * 4)
    ],
    date_posted: 'Jan 7, 2020'
  },
  {
    userId: '5e11e9d8eded1d23742c1c6a',
    title: 'Book #5 - Legend of Korra',
    description: 'This is a great description fo the book.',
    authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
    location: 'UofT',
    price: 100,
    edition: 1,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
    condition: ['POOR', 'FAIR', 'GOOD', 'VERY_GOOD', 'LIKE_NEW'][
      Math.round(Math.random() * 4)
    ],
    date_posted: 'Jan 7, 2020'
  },
  {
    userId: '5e11e9d8eded1d23742c1c6a',
    title: 'Book #6- Air',
    description: 'This is a great description fo the book.',
    authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
    location: 'UofT',
    price: 100,
    edition: 1,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
    condition: ['POOR', 'FAIR', 'GOOD', 'VERY_GOOD', 'LIKE_NEW'][
      Math.round(Math.random() * 4)
    ],
    date_posted: 'Jan 7, 2020'
  },
  {
    userId: '5e11e9d8eded1d23742c1c6a',
    title: 'Book #7 - Air',
    description: 'This is a great description fo the book.',
    authors: ['John Doe', 'Jane Doe', 'Henry The 3rd'],
    location: 'UofT',
    price: 100,
    edition: 1,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg',
    condition: ['POOR', 'FAIR', 'GOOD', 'VERY_GOOD', 'LIKE_NEW'][
      Math.round(Math.random() * 4)
    ],
    date_posted: 'Jan 7, 2020'
  }
]

module.exports = async (users, numberOfBooksPerUser) => {
  console.log('books.seeds...')

  for (const customBook of customBooks) {
    const newBook = await new Book(customBook).save()

    books.push(newBook)
  }

  const fakeBooks = await bookFactory(users, numberOfBooksPerUser)

  return [...books, ...fakeBooks]
}
