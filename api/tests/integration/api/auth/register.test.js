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

/**
 * 1. Arrange
 *  - setup the world
 * 2. Act
 *  - making the http call
 * 3. Assert
 *  - response check
 */
describe('API Test - Register User', () => {

  it('POST /api/v1/auth/register - happy path', async () => {
    let user = {
      first_name: 'Yichen',
      last_name: 'Zhu',
      username: 'yichen1337',
      email: 'yichen1337@yichen1337.com',
      password: 'password123',
      password_confirmation: 'password123'
    };

    let response = await (await fetch(`${baseURL}/auth/register`, {
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