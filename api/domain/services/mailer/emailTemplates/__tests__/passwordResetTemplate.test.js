const passwordResetTemplate = require('../passwordResetTemplate')

describe('passwordResetTemplate', () => {
  test('Happy Path', () => {
    const template = passwordResetTemplate({
      link: 'http://hey.com'
    })
    console.log(template)
  })
})