;(async () => {
  console.log('Database seeds started...')

  const users = await require('./users.seeds')()
  const accounts = await require('./accounts.seeds')(users)
  const bookstores = await require('./bookstores.seeds')(users)
  const books = await require('./books.seeds')(users)
  const rooms = await require('./rooms.seeds')(users)
  const messages = await require('./messages.seeds')(rooms, users)

  console.log('Database seeds completed...')
})()
