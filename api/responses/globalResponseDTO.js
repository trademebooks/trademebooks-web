const globalResponseDTO = ({ status, code, message, data, errors }) => {
  const status = status || 'success'
  const code = code | 200
  const message = message || 'Default API Message.'
  const data = data || {}
  const errors = errors || null

  return {
    status,
    code,
    message,
    data,
    errors
  }
}

module.exports = globalResponseDTO
