const mailerService = require('../mailer.service')

beforeAll(async () => { })

beforeEach(() => { })

afterEach(async () => { })

afterAll(async () => { })

describe('Test Suite: Mailer Service', () => {
  test('mailerService - sendMail', async () => {
    const mail = await mailerService.sendMail({
      toEmail: 'yichenzhu1337@gmail.com',
      body: `Here is the URL to reset your password`,
      subject: 'trademebooks.com forgot password'
    })

  })
})
