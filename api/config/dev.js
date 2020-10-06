module.exports = {
  baseUrl: 'http://localhost:',
  port: 5000,
  apiPrefix: 'api',
  apiVersion: 'v1',
  baseUrl: `${this.baseUrl}${this.port}/${this.apiPrefix}/${this.apiVersion}`,
  mongoURI: 'mongodb://localhost:27017/trademebooks_dev_db',
  sessionSecret: 'my-secret-session-dev',
  sendGridKey:
    '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',
  twilioKeys: {
    accountSid: 'ACaf602a3c1207efe0343de5c9130a3340',
    authToken: 'b20ac9f89c3a16bc8699274e06ea5c8a'
  },
  contactUsEmail: 'yichenzhu1337@gmail.com'
}
