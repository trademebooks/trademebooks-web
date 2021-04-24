module.exports = {
  baseUrl: 'http://localhost:',
  port: Math.round(Math.random() * 65535),
  apiPrefix: 'api',
  apiVersion: 'v1',
  mongoURI: 'mongodb://localhost:27017/trademebooks_test_db',
  sessionSecret: 'test-my-secret-session',
  sendGridKey:
    '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',
  twilioKeys: {
    accountSid: 'test_twilio_account_sid',
    authToken: 'test_twilio_auth_token'
  },
  contactUsEmail: 'yichenzhu1337@gmail.com',
  GOOGLE: {
    clientID: 'x',
    clientSecret: 'x'
  },
  FACEBOOK: {
    clientID: 'x',
    clientSecret: 'x'
  },
  TWITTER: {
    clientID: 'x',
    clientSecret: 'x'
  },
  GITHUB: {
    clientID: 'x',
    clientSecret: 'x'
  },
  LINKEDIN: {
    clientID: 'x',
    clientSecret: 'x'
  }
}
