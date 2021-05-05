/* eslint-disable */
const ApiGeneralError = require('../ApiGeneralError')

describe('ApiGeneralError', () => {
  test('All Params', () => {
    try {
      throw new ApiGeneralError({
        status: 'failed',
        code: 400,
        message: 'Something went wrong.',
        data: null,
        errors: ['something is wrong here']
      })
    } catch (err) {
      expect(err.name).toBe('ApiGeneralError')
      expect(err.status).toBe('failed')
      expect(err.code).toBe(400)
      expect(err.message).toBe('Something went wrong.')
      expect(err.data).toEqual(null)
      expect(err.errors).toEqual(['something is wrong here'])
    }
  })
})
