const db = require('../../../utils/db');
let dbConnection;
const dbTestUtils = require('../../../../tests/testUtils/dbTestUtil');

const bookRepository = require('../book.repository');
const BookModel = require('../../models/book.model');

beforeAll(async () => {
  dbConnection = await db();
});

beforeEach(async () => {
  await dbTestUtils.setUpDatabase();
});

afterEach(async () => {
  await dbTestUtils.clearDatabase();
});

afterAll(async () => {
  await dbConnection.disconnect();
});

describe('Test Suite: Book Repository', () => {

  it('Book Repository - getAll', async () => {
    let books = await bookRepository.getAll();

    expect(books.length).toBe(15);
  });

  it('Book Repository - getById', async () => {
    let book = await bookRepository.getById('56e6dd2eb4494ed008d595bd');

    expect(book).toBe(null);
  });

  it('Book Repository - createBook', async () => {
    let newBook = {
      title: 'Harry Potter and the Awesome Book of Nothing',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      price: 100,
      author: 'J.K. Rowling',
      datePublished: Date.now()
    }

    let book = await bookRepository.create(newBook);
    let books = await dbTestUtils.getAllTableData(BookModel);
    let mostRecentlyInsertedBook = books[books.length - 1];
    expect(book.id).toBe(mostRecentlyInsertedBook.id);
  });

  it('Book Repository - updateBookById', async () => {
    let books = await dbTestUtils.getAllTableData(BookModel);
    let bookToUpdate = books[0];

    let newBook = {
      title: 'Harry Potter and the Awesome Book of Nothing',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      price: 100,
      author: 'J.K. Rowling',
      datePublished: Date.now()
    }
    let book = await bookRepository.updateById(bookToUpdate.id, newBook);

    let updatedBooks = await dbTestUtils.getAllTableData(BookModel);

    expect(updatedBooks[0].title).toBe(newBook.title);
  });

  it('Book Repository - deleteBookById', async () => {
    let books = await dbTestUtils.getAllTableData(BookModel);
    let bookToDelete = books[0];
    
    await bookRepository.deleteById(bookToDelete.id);
    
    let updatedBooks = await dbTestUtils.getAllTableData(BookModel);
    expect(updatedBooks.find(book => { return book.id === bookToDelete.id})).toBe(undefined);
  });
});

