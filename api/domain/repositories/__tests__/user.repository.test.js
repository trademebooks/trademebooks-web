const db = require('../../../utils/db');
let dbConnection;
const dbTestUtils = require('../../../../tests/testUtils/dbTestUtil');

const userRepository = require('../user.repository');
const UserModel = require('../../models/user.model');

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

describe('Test Suite: User Repository', () => {
  let testUser = {
    first_name: 'Yichen',
    last_name: 'Zhu',
    email: 'yichen@yichen.com',
    password: 'password123',
    phone_number: '1234567890'
  };

  it('User Repository - createUser', async () => {
    let user = await userRepository.createUser(testUser);
    const expected = 'Yichen';
    const actual = user.first_name;
    expect(actual).toEqual(expected);
  });

  xit('user Repository - findUserByEmailAndPassword', async () => {
    // 1. Arrange
    let user = await userRepository.createUser(testUser);
  
    // 2. Act
    const foundUser = await userRepository.findUserByEmailAndPassword(user)
  
    // 3. Assert
    const expected = 'Yichen';
    const actual = foundUser.first_name;
    expect(actual).toEqual(expected);
  });

  xit('user Repository - getUserById', () => {
    //let user = userRepository.getUserById(testUser);

    //console.log(user);

    // const user = new User({ name: "foo", birthday: "1987-01-02" });
    // await user.save();

    // const foundUser = await User.findOne({ id: asdasdasda });
    // const expected = "foo";
    // const actual = foundUser.name;
    // expect(actual).toEqual(expected);
  });

});