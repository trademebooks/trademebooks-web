class ApiGeneralError extends Error {
  constructor({ status, message, code, data, errors }) {
    super()

    this.name = 'ApiGeneralError'

    this.status = status || 'failed'
    this.code = code || 400
    this.message = message || 'Something went wrong...'
    this.data = data || null
    this.errors = errors || []
  }
}

module.exports = ApiGeneralError
