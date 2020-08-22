module.exports = {
  baseUrl: 'http://localhost:',
  port: Math.round(Math.random() * 65535),
  apiPrefix: 'api',
  apiVersion: 'v1',
  baseUrl: `${this.baseUrl}${this.port}/${this.apiPrefix}/${this.apiVersion}`,
  mongoURI: 'mongodb://localhost:27017/trademebooks_test_db',
  sessionSecret: 'my-secret-session-testing',
  sendGridKey: '123',
  twilioKeys: {
    accountSid: 'ACaf602a3c1207efe0343de5c9130a3340',
    authToken: 'b20ac9f89c3a16bc8699274e06ea5c8a'
  }
}