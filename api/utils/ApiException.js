// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#ES6_Custom_Error_Class
function ApiException(message, status, code, data = null, errors = null) {
  var instance = new Error(message)

  instance.name = 'ApiException'
  instance.status = status
  instance.code = code
  instance.data = data
  instance.errors = errors

  Object.setPrototypeOf(instance, Object.getPrototypeOf(this))

  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, ApiException)
  }

  return instance
}

ApiException.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
})

if (Object.setPrototypeOf) {
  Object.setPrototypeOf(ApiException, Error)
} else {
  ApiException.__proto__ = Error
}

module.exports = ApiException
