module.exports = {
  baseUrl: 'http://localhost:',
  port: Math.round(Math.random() * 65535),
  apiPrefix: 'api',
  apiVersion: 'v1',
  baseUrl: `${this.baseUrl}${this.port}/${this.apiPrefix}/${this.apiVersion}`,
  mongoURI: 'mongodb://localhost:27017/trademebooks_test_db',
  sessionSecret: 'test-my-secret-session',
  sendGridKey: 'test_sendgrid_token',
  twilioKeys: {
    accountSid: 'test_twilio_account_sid',
    authToken: 'test_twilio_auth_token'
  },
  contactUsEmail: 'yichen@chosensolutions.ca',
  googleClientID: 'my-google-client-id',
  googleClientSecret: 'my-google-client-secret'
}
