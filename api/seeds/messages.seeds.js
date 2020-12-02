const faker = require('faker')
const db = require('../utils/db')
require('../domain/models/message.model')

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
  const dbConnection = await db()

  const Message = dbConnection.model('message')

  await Message.deleteMany({})

  for (const message of messages) {
    await new Message(message).save()
  }

  for (let i = 1; i <= 40; i++) {
    const message = {
      userId: '5e11e9d8eded1d23742c1c6b',
      roomId: '5fc36879a0d3010d607eaade',
      messageBody: faker.lorem.sentences(Math.ceil(Math.random(1, 5) * 5))
    }
    
    await new Message(message).save()
  }

  await dbConnection.disconnect()

  return []
}
