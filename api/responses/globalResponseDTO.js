/**
 * Description: ...
 *
 * @param {*} status Number
 * @param {*} code Number
 * @param {*} message String
 * @param {*} data Object
 */
function globalResponseDTO(status, code, message, data, errors) {
  return {
    status,
    code,
    message,
    data,
    errors
  }
}

module.exports = globalResponseDTO
