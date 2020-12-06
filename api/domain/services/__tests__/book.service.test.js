const bookRepository = require('../../repositories/book.repository')
const bookService = require('../book.service')

beforeEach(() => {
  bookRepository.getAll = jest.fn(() => [])
  bookRepository.getById = jest.fn((id) => {})
  bookRepository.create = jest.fn((book) => {})
})

describe('Book Service Test Suite', () => {
  test('Book Service - getAllBooks', async () => {
    await bookService.getAllBooks('some string', 10)

    expect(bookRepository.getAll).toHaveBeenCalledWith('some string', 10)
    expect(bookRepository.getAll).toHaveBeenCalledTimes(1)
  })

  test('Book Service - getBookById', () => {
    bookService.getBookById(1)

    expect(bookRepository.getById).toHaveBeenCalledWith(1)
    expect(bookRepository.getById).toHaveBeenCalledTimes(1)
  })

  test('Book Service - createBook', () => {
    bookService.createBook({})

    expect(bookRepository.create).toHaveBeenCalledWith({})
    expect(bookRepository.create).toHaveBeenCalledTimes(1)
  })
})
