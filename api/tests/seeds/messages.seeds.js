const faker = require('faker')

const Message = require('../../domain/models/message.model')

const messages = [
  // Yichen Speaks
  {
    userId: '5e11e9d8eded1d23742c1c6a',
    roomId: '5fc36879a0d3010d607eaade',
    messageBody: 'Hi Cedric hows it going?'
  },
  {
    userId: '5e11e9d8eded1d23742c1c6a',
    roomId: '5fc36879a0d3010d607eaade',
    messageBody: 'Do you want to grab lunch?'
  },
  {
    userId: '5e11e9d8eded1d23742c1c6a',
    roomId: '5fc36879a0d3010d607eaade',
    messageBody: 'I was thinking sushi buffet, what do you think?'
  },
  // Cedric Speaks
  {
    userId: '5e11e9d8eded1d23742c1c6b',
    roomId: '5fc36879a0d3010d607eaade',
    messageBody: 'Oh hey Yichen!'
  },
  {
    userId: '5e11e9d8eded1d23742c1c6b',
    roomId: '5fc36879a0d3010d607eaade',
    messageBody: "Sure let's do it!"
  }
]

module.exports = async () => {
  // Custom messages
  for (const message of messages) {
    await new Message(message).save()
  }

  // Messages for room: 5fc36879a0d3010d607eaade
  for (let i = 1; i <= 200; i++) {
    const message = {
      roomId: '5fc36879a0d3010d607eaade',
      userId: ['5e11e9d8eded1d23742c1c6a', '5e11e9d8eded1d23742c1c6b'][
        Math.round(Math.random(0, 1))
      ],
      messageBody: faker.lorem.sentences(Math.ceil(Math.random(1, 5) * 5))
    }

    await new Message(message).save()
  }

  // Messages for room: 5fc40064c17e1f1e88dc806d
  for (let i = 1; i <= 20; i++) {
    const message = {
      roomId: '5fc40064c17e1f1e88dc806d',
      userId: ['5e11e9d8eded1d23742c1c6a', '5e11e9d8eded1d23742c1c6c'][
        Math.round(Math.random(0, 1))
      ],
      messageBody: faker.lorem.sentences(Math.ceil(Math.random(1, 5) * 5))
    }

    await new Message(message).save()
  }
}
