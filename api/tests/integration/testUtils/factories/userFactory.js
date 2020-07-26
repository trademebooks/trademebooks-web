const faker = require('faker');
const Model = require('../../../src/domain/models/user.model');
const bookFactory = require('../../../tests/testUtils/factories/bookFactory');

const factory = async (numberOfSeeds) => {
  for (let i = 1; i <= numberOfSeeds; i++) {
    let entityFields = {
      
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone_number: faker.phone.phoneNumber()
    }

    const entity = new Model(entityFields);

    const user = await entity.save();

    await bookFactory(3, user.id);
  }
}

module.exports = factory;