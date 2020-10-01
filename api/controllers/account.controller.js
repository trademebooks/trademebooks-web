const globalResponseDTO = require('../responses/globalResponseDTO');
const accountService = require('../domain/services/account.service');

const catchException = require('../utils/catchExceptions');

const getAccountById = catchException(async (req, res, next) => {
  const account = await accountService.getById(req.session.user._id);

  return res.json(globalResponseDTO(
    status = 'success',
    code = 200,
    message = `The current auth user's account settings.`,
    data = account,
    errors = null
  ));
});

const updateAccountById = catchException(async (req, res, next) => {
  const account = await accountService.updateById(req.session.user._id, req.body)

  return res.json(globalResponseDTO(
    status = 'success',
    code = 200,
    message = `Updated the current auth user's account settings.`,
    data = account,
    errors = null
  ));
});

module.exports = {
  getAccountById,
  updateAccountById
};