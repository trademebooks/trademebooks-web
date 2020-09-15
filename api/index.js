const http = require('http')
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const session = require("express-session");

const config = require('./config');
const globalResponseDTO = require('./responses/globalResponseDTO');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

app.use(
  session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection, collection: 'sessions' })
  })
);

const getRouter = require('./routes');
const router = getRouter();
app.use('/api/v1', router);

// Event listeners
const events = require('./events');

/////////////////////////////////////////////////////////////////////////
// 404 API Endpoint Not Found
// router.get('*', (req, res, next) => {
//   return res
//     .status(404)
//     .json(globalResponseDTO(
//       status = "failed",
//       code = 404,
//       message = `Test message: your shit failed!`,
//       data = {
//         message: err.message,
//         err: err.status
//       },
//     ));
// });
// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

app.use((err, req, res, next) => {
  // log it out into the conosle
  console.log('===============================');
  console.log('Global Error Catcher:', err.name);
  console.log('===============================');
  if (err.name === 'ApiException') {
    console.error('ApiException', err);

    return res
      .status(err.code)
      .json(globalResponseDTO(
        status = err.status,
        code = err.code,
        message = err.message,
        data = err.data,
        errors = err.errors
      ));
  }
  else if (err.name === 'MongoError') {
    console.error('MongoError', err);

    if (err.errmsg.includes('E11000 duplicate key error')) {
      return res
        .status(400)
        .json(globalResponseDTO(
          status = 'failed',
          code = 400,
          message = err.errmsg,
          data = null,
          errors = [
            'This email is already taken.'
          ]
        ));
    }
  }
  else {
    console.error('Other Error', err);
  }
});

// Frontend - Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = http.createServer(app);