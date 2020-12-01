;(async () => {
  console.log('Database seeds started...')

  const users = await require('./users.seeds')()
  const accounts = await require('./accounts.seeds')(users)
  const bookstores = await require('./bookstores.seeds')(users)
  const books = await require('./books.seeds')(users)

  // Chat Application Seeds
  const rooms = await require('./rooms.seeds')()
  const messages = await require('./messages.seeds')()

  console.log('Database seeds completed...')
})()
