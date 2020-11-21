const globalResponseDTO = require('../responses/globalResponseDTO')
const catchExceptions = require('../utils/catchExceptions')

/**
 * A health check is just to see if the application is available and working
 */
const getHealthCheck = catchExceptions(async (req, res, next) => {
  return res
    .status(200)
    .json(
      globalResponseDTO(
        (status = 'success'),
        (code = 200),
        (message = `The application is up and running!`),
        (data = {}),
        (errors = null)
      )
    )
})

module.exports = {
  getHealthCheck
}
