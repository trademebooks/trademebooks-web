const globalResponseDTO = require('../dtos/responses/globalResponseDTO')
const catchExceptions = require('../utils/catchExceptions')

const getHealthCheck = catchExceptions(async (req, res, next) => {
  res.status(200).json(
    globalResponseDTO({
      status: 'success',
      code: 200,
      message: `The application is up and running!`,
      data: {},
      errors: null
    })
  )
})

module.exports = {
  getHealthCheck
}
