const event = require('../userHasRegisteredEvent')
const mailer = require('../../domain/services/mailer/email.service.js')

const sentEmailSuccessful = !!Math.round(Math.random(0, 1))
jest.mock('../../domain/services/mailer/email.service.js')
mailer.sendEmail.mockImplementation(() => sentEmailSuccessful)

describe('userHasRegisteredEvent', () => {
  test("Email has (un)successfully been sent to the user's email address", () => {
    const user = {
      first_name: 'John',
      last_name: 'John',
      email: 'john123@chosensolutions.com'
    }
    const eventResult = event(user)

    mailer.sendEmail.mockImplementation(() => true)

    expect(mailer.sendEmail).toHaveBeenCalledTimes(1)
    expect(eventResult).toBe(sentEmailSuccessful)
  })
})
