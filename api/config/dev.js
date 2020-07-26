module.exports = {
  baseUrl: 'http://localhost:',
  port: 5000,
  apiPrefix: 'api',
  apiVersion: 'v1',
  baseUrl: `${this.baseUrl}${this.port}/${this.apiPrefix}/${this.apiVersion}`,
  mongoURI: 'mongodb://localhost:27017/trademebooks_dev_db',
  sessionSecret: 'my-secret-session-dev'
}