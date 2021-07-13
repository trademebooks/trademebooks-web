module.exports = {
  baseUrl: 'http://localhost:',
  port: Math.round(Math.random() * 65535),
  clientPort: Math.round(Math.random() * 65535),
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
    clientID: 'process.env.GOOGLE_CLIENT_ID',
    clientSecret: 'process.env.GOOGLE_CLIENT_SECRET'
  },
  FACEBOOK: {
    clientID: 'process.env.FACEBOOK_CLIENT_ID',
    clientSecret: 'process.env.FACEBOOK_CLIENT_SECRET'
  },
  TWITTER: {
    clientID: 'process.env.TWITTER_CLIENT_ID',
    clientSecret: 'process.env.TWITTER_CLIENT_SECRET'
  },
  GITHUB: {
    clientID: 'process.env.GITHUB_CLIENT_ID,',
    clientSecret: 'process.env.GITHUB_CLIENT_SECRET'
  },
  LINKEDIN: {
    clientID: 'process.env.LINKEDIN_CLIENT_ID,',
    clientSecret: 'process.env.LINKEDIN_CLIENT_SECRET'
  },
  AWS: {
    accessKeyId: 'process.env.AWS_KEY_ID,',
    secretAccessKey: 'process.env.AWS_SECRET_ACCESS_KEY'
  }
}
