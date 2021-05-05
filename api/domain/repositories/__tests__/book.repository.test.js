const db = require('../../../utils/db')
let dbConnection
const dbTestUtils = require('../../../tests/utils')

const bookRepository = require('../book.repository')
const Book = require('../../models/book.model')

beforeAll(async () => {
  dbConnection = await db()
})

beforeEach(async () => {
  await dbTestUtils.setUpDatabase()
})

afterEach(async () => {
  await dbTestUtils.clearDatabase()
})

afterAll(async () => {
  await dbConnection.disconnect()
})

describe('Test Suite: Book Repository', () => {
  test('Book Repository - getAll', async () => {
    const books = await bookRepository.getAll()

    expect(books.length > 0).toBe(true)
  })

  test('Book Repository - getById', async () => {
    const book = await bookRepository.getById('56e6dd2eb4494ed008d595bd')

    expect(book).toBe(null)
  })

  test('Book Repository - createBook', async () => {
    let newBook = {
      title: 'Harry Potter and the Awesome Book of Nothing',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      price: 100,
      author: 'J.K. Rowling',
      datePublished: Date.now()
    }

    const book = await bookRepository.create(newBook)
    const books = await dbTestUtils.getAllTableData(Book)
    const mostRecentlyInsertedBook = books[books.length - 1]
    expect(book.id).toBe(mostRecentlyInsertedBook.id)
  })

  test('Book Repository - updateBookById', async () => {
    const books = await dbTestUtils.getAllTableData(Book)
    const bookToUpdate = books[0]

    const newBook = {
      title: 'Harry Potter and the Awesome Book of Nothing',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      price: 100,
      author: 'J.K. Rowling',
      datePublished: Date.now()
    }
    await bookRepository.updateById(bookToUpdate.id, newBook)

    const updatedBooks = await dbTestUtils.getAllTableData(Book)

    expect(updatedBooks[0].title).toBe(newBook.title)
  })

  test('Book Repository - deleteBookById', async () => {
    const books = await dbTestUtils.getAllTableData(Book)
    const bookToDelete = books[0]

    await bookRepository.deleteById(bookToDelete.id)

    const updatedBooks = await dbTestUtils.getAllTableData(Book)
    expect(
      updatedBooks.find((book) => {
        return book.id === bookToDelete.id
      })
    ).toBe(undefined)
  })
})
