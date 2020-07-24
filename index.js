const server = require('./api/api');
const PORT = process.env.PORT || 5000;

const db = require('./api/utils/db');

server.listen(PORT, async () => {
  await db(); // start the database
  console.log(`Started on port ${PORT}`);
})

// process.on("unhandledRejection", error => {
//   console.log(error.message);
//   console.log("--------------------------");
//   process.exit(1);
// });