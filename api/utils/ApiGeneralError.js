class ApiGeneralError extends Error {
  constructor(message, status, code, data = null, errors = null) {
    super()
    this.name = 'ApiGeneralError'
    this.status = status
    this.code = code
    this.message = message
    this.data = data
    this.errors = errors
  }
}

module.exports = ApiGeneralError
