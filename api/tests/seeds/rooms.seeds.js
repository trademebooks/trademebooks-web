const Room = require('../../domain/models/room.model')

const rooms = [
  // Yichen chats with Cedric
  {
    _id: '5fc36879a0d3010d607eaade',
    users: ['5e11e9d8eded1d23742c1c6a', '5e11e9d8eded1d23742c1c6b'] // Yichen's user id, Cedric's user id
  },
  // Yichen chats with Wesley
  {
    _id: '5fc40064c17e1f1e88dc806d', //
    users: ['5e11e9d8eded1d23742c1c6a', '5e11e9d8eded1d23742c1c6c'] // Yichen's user id, Cedric's user id
  }
]

module.exports = async () => {
  console.log('rooms.seeds...')

  for (const room of rooms) {
    await new Room(room).save()
  }
}
