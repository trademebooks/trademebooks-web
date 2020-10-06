console.log('Database seeds started...');

(async () => {
  const users = await require('./users.seeds')();
  const accounts = await require('./accounts.seeds')(users);
  const bookstores = await require('./bookstores.seeds')(users);
  const books = await require('./books.seeds')(users);

  console.log('Database seeds completed..');
})();
