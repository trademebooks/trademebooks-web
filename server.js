const app = express();

const server = require('./api');
const PORT = process.env.PORT || 5000;

const db = require('./api/utils/db');

// Frontend - Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Backend - Server
server.listen(PORT, async () => {
  await db(); // start the database
  console.log(`Visit the API's health check page at: http://localhost:${PORT}/api/v1/app/health`);
})

// global exception handler
// process.on("unhandledRejection", error => {
//   console.log(error.message);
//   console.log("--------------------------");
//   process.exit(1);
// });