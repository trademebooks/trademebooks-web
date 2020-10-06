const event = require('../userHasRegisteredEvent')
const mailer = require('../../utils/mailer')

let sentEmailSuccessful = !!Math.round(Math.random(0, 1))
jest.mock('../../utils/mailer')
mailer.sendEmailToUser.mockImplementation(() => sentEmailSuccessful)

describe('userHasRegisteredEvent', () => {
  it("Email has (un)successfully been sent to the user's email address", () => {
    let eventResult = event(
      (user = {
        firstName: 'John',
        email: 'john@john.com'
      })
    )

    mailer.sendEmailToUser.mockImplementation(() => true)

    expect(mailer.sendEmailToUser).toHaveBeenCalledTimes(1)
    expect(eventResult).toBe(sentEmailSuccessful)
  })
})
