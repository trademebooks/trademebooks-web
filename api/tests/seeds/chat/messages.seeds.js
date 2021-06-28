const Message = require('../../../domain/models/chat/message.model')

const messages = [
  // Conversation messages between Yichen and Cedric
  // Yichen Speaks
  {
    conversationId: '5fc36879a0d3010d607eaade',
    fromUserId: '5e11e9d8eded1d23742c1c6a',
    toUserId: '5e11e9d8eded1d23742c1c6b',
    body: 'hey'
  },
  {
    conversationId: '5fc36879a0d3010d607eaade',
    fromUserId: '5e11e9d8eded1d23742c1c6a',
    toUserId: '5e11e9d8eded1d23742c1c6b',
    body: 'Do you want to grab lunch?'
  },
  {
    conversationId: '5fc36879a0d3010d607eaade',
    fromUserId: '5e11e9d8eded1d23742c1c6a',
    toUserId: '5e11e9d8eded1d23742c1c6b',
    body: 'I was thinking sushi buffet, what do you think?'
  },
  // Cedric Speaks
  {
    conversationId: '5fc36879a0d3010d607eaade',
    fromUserId: '5e11e9d8eded1d23742c1c6b',
    toUserId: '5e11e9d8eded1d23742c1c6a',
    body: 'Oh hey Yichen!'
  },
  {
    conversationId: '5fc36879a0d3010d607eaade',
    fromUserId: '5e11e9d8eded1d23742c1c6b',
    toUserId: '5e11e9d8eded1d23742c1c6a',
    body: "Sure let's do it!"
  },

  // Conversation messages between Yichen and Wes
  // Wes Speaks
  {
    conversationId: '5fc40064c17e1f1e88dc805f',
    fromUserId: '5e11e9d8eded1d23742c1c6c',
    toUserId: '5e11e9d8eded1d23742c1c6a',
    body: 'Hi Yichen, this is Wes'
  }
]

module.exports = async () => {
  console.log('messages.seeds...')

  // Custom messages
  for (const message of messages) {
    await new Message(message).save()
  }

  // Messages for conversationId: 5fc36879a0d3010d607eaade (between Yichen and Cedric)
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

  // Messages for converation: 5fc40064c17e1f1e88dc806d (between Yichen and Wesley)
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
