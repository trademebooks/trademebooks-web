const userRegistrationTemplate = require('../userRegistrationTemplate')

describe('userRegistrationTemplate', () => {
  test('Happy Path', () => {
    const template = userRegistrationTemplate('http://hey.com')
    console.log(template)
  })
})