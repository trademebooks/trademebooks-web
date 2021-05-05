const Message = require('../../../domain/models/chat/message.model')

const messages = [
  // Yichen Speaks
  {
    conversation: '5fc36879a0d3010d607eaade',
    from: '5e11e9d8eded1d23742c1c6a',
    to: '5e11e9d8eded1d23742c1c6b',
    body: 'hey'
  },
  {
    conversation: '5fc36879a0d3010d607eaade',
    from: '5e11e9d8eded1d23742c1c6a',
    to: '5e11e9d8eded1d23742c1c6b',
    body: 'Do you want to grab lunch?'
  },
  {
    conversation: '5fc36879a0d3010d607eaade',
    from: '5e11e9d8eded1d23742c1c6a',
    to: '5e11e9d8eded1d23742c1c6b',
    body: 'I was thinking sushi buffet, what do you think?'
  },
  // Cedric Speaks
  {
    conversation: '5fc36879a0d3010d607eaade',
    from: '5e11e9d8eded1d23742c1c6b',
    to: '5e11e9d8eded1d23742c1c6a',
    body: 'Oh hey Yichen!'
  },
  {
    conversation: '5fc36879a0d3010d607eaade',
    from: '5e11e9d8eded1d23742c1c6b',
    to: '5e11e9d8eded1d23742c1c6a',
    body: "Sure let's do it!"
  }
]

module.exports = async () => {
  console.log('messages.seeds...')

  // Custom messages
  for (const message of messages) {
    await new Message(message).save()
  }

  // Messages for room: 5fc36879a0d3010d607eaade
  for (let i = 1; i <= 200; i++) {
    // const message = {
    //   roomId: '5fc36879a0d3010d607eaade',
    //   userId: ['5e11e9d8eded1d23742c1c6a', '5e11e9d8eded1d23742c1c6b'][
    //     Math.round(Math.random(0, 1))
    //   ],
    //   messageBody: faker.lorem.sentences(Math.ceil(Math.random(1, 5) * 5))
    // }
    // await new Message(message).save()
  }

  // Messages for room: 5fc40064c17e1f1e88dc806d
  for (let i = 1; i <= 20; i++) {
    // const message = {
    //   roomId: '5fc40064c17e1f1e88dc806d',
    //   userId: ['5e11e9d8eded1d23742c1c6a', '5e11e9d8eded1d23742c1c6c'][
    //     Math.round(Math.random(0, 1))
    //   ],
    //   messageBody: faker.lorem.sentences(Math.ceil(Math.random(1, 5) * 5))
    // }
    // await new Message(message).save()
  }
}
