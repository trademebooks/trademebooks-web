module.exports = {
  baseUrl: 'http://localhost:',
  port: Math.round(Math.random() * 65535),
  apiPrefix: 'api',
  apiVersion: 'v1',
  baseUrl: `${this.baseUrl}${this.port}/${this.apiPrefix}/${this.apiVersion}`,
  mongoURI: 'mongodb://localhost:27017/trademebooks_test_db',
  sessionSecret: 'my-secret-session-testing'
}