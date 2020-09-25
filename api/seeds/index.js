console.log('Complete database seeds started...');

(async () => {
  const users = await require('./users.seeds')();
  const bookstores = await require('./bookstores.seeds')(users);
  const books = await require('./books.seeds')(users);

  console.log('Complete database seeds completed..');
})();

