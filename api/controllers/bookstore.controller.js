const globalResponseDTO = require('../responses/globalResponseDTO')
const bookstoreService = require('../domain/services/bookstore.service')
const catchException = require('../utils/catchExceptions')

/**
 * Description: Get a bookstore by username
 */
const getBookstoreByUsername = catchException(async (req, res, next) => {
  // 5. business logic
  let bookstore = await bookstoreService.getBookstoreByUsername(
    req.params.username
  )

  // 7. response
  return res.json(
    globalResponseDTO(
      (status = 'success'),
      (code = 200),
      (message = `Bookstore with the specified username.`),
      (data = bookstore),
      (errors = null)
    )
  )
})

module.exports = {
  getBookstoreByUsername
}
