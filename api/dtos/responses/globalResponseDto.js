const globalResponseDto = ({ status, code, message, data, errors }) => {
  status = status || 'success'
  code = code || 200
  message = message || 'Default API Message.'
  data = data || {}
  errors = errors || null

  return {
    status,
    code,
    message,
    data,
    errors
  }
}

module.exports = globalResponseDto
