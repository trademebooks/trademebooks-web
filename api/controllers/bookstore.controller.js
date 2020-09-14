const globalResponseDTO = require("../responses/globalResponseDTO");
const bookstoreService = require("../domain/services/bookstore.service");
const catchException = require("../utils/catchExceptions");
const updateBookstoreRequestDTO = require("../requests/updateBookstoreDTO");

/**
 * Description: Get a bookstore by username
 */
const getBookstoreByUsername = catchException(async (req, res, next) => {
  // 5. business logic
  let bookstore = await bookstoreService.getBookstoreByUsername(
    req.params.username
  );

  // 7. response
  return res.json(
    globalResponseDTO(
      (status = "success"),
      (code = 200),
      (message = `Bookstore with the specified username.`),
      (data = bookstore),
      (errors = null)
    )
  );
});

/**
 * Description: Update a bookstore (any of username, school, location)
 */
const updateBookstore = catchException(async (req, res, next) => {
  // 1. PUT /api/v1/bookstore/{id}/

  // 2. middleware: auth

  /*
  // 3. request
  const updateBookstoreRequest = updateBookstoreRequestDTO({
    id: req.session.user.id,
    ...req.body,
  });
  */

  // 4. validation
  // const createBookValidation = createBookRequestDTO(createBookRequest);

  // 5. business logic
  console.log("req.params", req.params);
  console.log("req.params.bookstoreId: ", req.params.bookstoreId);
  console.log("req.body: ", req.body);
  const updatedBookstore = await bookstoreService.updateBookstoreById(
    req.params.bookstoreId,
    req.body
  );
  console.log("updated bookstore: ", updatedBookstore);

  // 7. response
  return res
    .status(200)
    .json(
      globalResponseDTO(
        (status = "success"),
        (code = 200),
        (message = `Bookstore has successfully been updated.`),
        (data = updatedBookstore),
        (errors = null)
      )
    );
});

module.exports = {
  getBookstoreByUsername,
  updateBookstore,
};
