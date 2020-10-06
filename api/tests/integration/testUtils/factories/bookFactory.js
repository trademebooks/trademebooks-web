const faker = require('faker')
const Model = require('../../../src/domain/models/book.model')

const factory = async (numberOfSeeds, userId = '5ea6514bbbc6151da28ddbbe') => {
  for (let i = 1; i <= numberOfSeeds; i++) {
    let entityFields = {
      userId,
      title: faker.name.findName(),
      description: faker.lorem.paragraphs(3),
      price: faker.random.number(500),
      author: faker.name.findName(),
      datePublished: faker.date.past()
    }

    const entity = new Model(entityFields)

    await entity.save()
  }
}

module.exports = factory
