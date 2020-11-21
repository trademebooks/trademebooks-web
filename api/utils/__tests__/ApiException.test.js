const ApiException = require('../ApiException')

test('ApiException', () => {
  try {
    throw new ApiException(
      (message = 'Oops, something went wrong.'),
      (status = 'failed'),
      (code = 400),
      (data = {
        errors: ['something is wrong here']
      })
    )
  } catch (err) {
    expect(err.name).toBe('ApiException')
    expect(err.message).toBe('Oops, something went wrong.')
    expect(err.status).toBe('failed')
    expect(err.code).toBe(400)
    expect(err.data).toEqual({
      errors: ['something is wrong here']
    })
  }
})
