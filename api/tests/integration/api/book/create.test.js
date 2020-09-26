const fetch = require('node-fetch')
const api = require('../../../../')

const apiPort = Math.round(Math.random() * 65535)
const baseURL = `http://localhost:${apiPort}/api/v1`;

const db = require('../../../../utils/db');
let dbConnection;
const dbTestUtils = require('../../../testUtils/dbTestUtil');

beforeAll(async () => {
  await api.listen(apiPort);
  dbConnection = await db(); // start the database
})

beforeEach(async () => {
  await dbTestUtils.setUpDatabase();
});

afterEach(async () => {
  await dbTestUtils.clearDatabase();
});

afterAll(async () => {
  await api.close();
  await dbConnection.disconnect();
});

describe('Books API - Create', () => {
  xit('POST /api/v1/books', async () => {
    let response = await (await fetch(`${baseURL}/books`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Harry Potter and the Order of the Phoenix',
        description: 'Buy my book! It\'s awesome!',
        price: 100
      })
    })).json();

    expect(response).toEqual({
      message: 'Book created successful!',
      data: {
        title: 'Harry Potter and the Order of the Phoenix',
        description: 'Buy my book! It\'s awesome!',
        price: 100
      }
    });
  });

});