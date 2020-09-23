module.exports = {
  baseUrl: 'http://localhost:',
  port: 5000,
  apiPrefix: 'api',
  apiVersion: 'v1',
  baseUrl: `${this.baseUrl}${this.port}/${this.apiPrefix}/${this.apiVersion}`,
  mongoURI: 'mongodb+srv://yichen:7nSG04yWBagm65Jd@trademebookscluster01.selho.mongodb.net/trademebooks_prod_db',
  sessionSecret: 'my-secret-session-dev',
  sendGridKey: 'some-key',
  twilioKeys: {
    accountSid: 'some-key',
    authToken: 'some-key'
  }
}