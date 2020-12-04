const globalResponseDTO = require('./responses/globalResponseDTO')

const globalExceptionHandler = async (err, req, res, next) => {
  // log it out into the conosle
  console.log('===============================')
  console.log('Global Error Catcher:', err.name)
  console.log('===============================')
  if (err.name === 'ApiGeneralError') {
    console.error('ApiGeneralError', err)

    res.status(err.code).json(
      globalResponseDTO({
        status: err.status,
        code: err.code,
        message: err.message,
        data: err.data,
        errors: err.errors
      })
    )
  } else if (err.name === 'MongoError') {
    console.error('MongoError', err)

    if (err.errmsg.includes('E11000 duplicate key error')) {
      res.status(400).json(
        globalResponseDTO({
          status: 'failed',
          code: 400,
          message: err.errmsg,
          data: null,
          errors: ['This email is already taken.']
        })
      )
    }
  } else {
    console.error('Other Error', err)
  }
}
