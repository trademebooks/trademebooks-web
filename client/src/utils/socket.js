import io from 'socket.io-client'

// const BASE_URL =
//   process.env.NODE_ENV === 'development'
//     ? 'localhost:5000'
//     : 'https://www.trademebooks.com/'
const BASE_URL = 'localhost:5000'
const socket = io(BASE_URL)

socket.on('connect', (e) => {
  socket.on('disconnect', () => {
    console.log('client disconnected')
  })
})

export default socket
