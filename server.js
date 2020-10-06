const server = require('./api');
const PORT = process.env.PORT || 5000;

const db = require('./api/utils/db');

// Backend - Server
server.listen(PORT, async () => {
  await db(); // start the database
  console.log(
    `Visit the API's health check page at: http://localhost:${PORT}/api/v1/app/health`
  );
});

// global exception handler
// process.on("unhandledRejection", error => {
//   console.log(error.message);
//   console.log("--------------------------");
//   process.exit(1);
// });
