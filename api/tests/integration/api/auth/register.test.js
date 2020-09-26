const fetch = require('node-fetch')
const api = require('../../../src/server')

const apiPort = Math.round(Math.random() * 65535)
const baseURL = `http://localhost:${apiPort}/api/v1`;

const db = require('../../../src/utils/db');
let dbConnection;
const dbTestUtils = require('../../../tests/testUtils/dbTestUtil');
const ApiException = require('../../../src/utils/ApiException');

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

/**
 * 1. Arrange
 *  - setup the world
 * 2. Act
 *  - making the http call
 * 3. Assert
 *  - response check
 */
describe('API Test - Register User', () => {

  xit('POST /api/v1/auth/register - happy path', async () => {
    let user = {
      first_name: 'Yichen',
      last_name: 'Zhu',
      email: 'yichen@yichen.com',
      password: 'password123',
      password_confirmation: 'password123',
      phone_number: '1234567890'
    };

    let response = await(await fetch(`${baseURL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })).json();

    delete user.password_confirmation;

    expect(response).toMatchObject({
      status: "success",
      code: 200,
      message: `The email: ${user.email} has successfully registered.`,
      data: user
    });
  });

});