module.exports = {
  baseUrl: 'http://localhost:',
  port: 5000,
  apiPrefix: 'api',
  apiVersion: 'v1',
  baseUrl: `${this.baseUrl}${this.port}/${this.apiPrefix}/${this.apiVersion}`,
  mongoURI: 'mongodb+srv://yichen:7nSG04yWBagm65Jd@trademebookscluster01.selho.mongodb.net/trademebooks_prod_db',
  sessionSecret: 'my-secret-session-dev',
  sendGridKey: '123',
  twilioKeys: {
    accountSid: 'ACaf602a3c1207efe0343de5c9130a3340',
    authToken: 'b20ac9f89c3a16bc8699274e06ea5c8a'
  }
}