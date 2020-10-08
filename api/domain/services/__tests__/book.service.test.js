const bookRepository = require('../../repositories/book.repository')
const bookService = require('../book.service')

beforeAll(async () => {})

beforeEach(() => {
  bookRepository.getAll = jest.fn(() => [])
  bookRepository.getById = jest.fn((id) => {})
})

afterEach(async () => {})

afterAll(async () => {})

describe('Book Service Test Suite', () => {
  test('Book Service - getAllBooks', async () => {
    await bookService.getAllBooks()

    expect(bookRepository.getAll).toHaveBeenCalledWith()
    expect(bookRepository.getAll).toHaveBeenCalledTimes(1)
    expect(bookRepository.getAll).toHaveReturnedWith([])
  })

  xtest('Book Service - getAllBookById', () => {
    bookService.getBookById(1)

    expect(bookRepository.getById).toHaveBeenCalledWith(1)
    expect(bookRepository.getById).toHaveBeenCalledTimes(1)
    //expect(bookRepository.getById).toHaveReturnedWith({});
  })

  xtest('Book Service - createBook', () => {
    bookService.getAllBooks()

    expect(bookRepository.getAll).toHaveBeenCalledWith()
    expect(bookRepository.getAll).toHaveBeenCalledTimes(1)
    expect(bookRepository.getAll).toHaveReturnedWith([])
  })

  xtest('Book Service - updateBookById', () => {
    bookService.getAllBooks()

    expect(bookRepository.getAll).toHaveBeenCalledWith()
    expect(bookRepository.getAll).toHaveBeenCalledTimes(1)
    expect(bookRepository.getAll).toHaveReturnedWith([])
  })

  xtest('Book Service - deleteBookById', () => {
    bookService.getAllBooks()

    expect(bookRepository.getAll).toHaveBeenCalledWith()
    expect(bookRepository.getAll).toHaveBeenCalledTimes(1)
    expect(bookRepository.getAll).toHaveReturnedWith([])
  })
})
