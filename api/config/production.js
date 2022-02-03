module.exports = {
  baseUrl: 'https://www.trademebooks.com:',
  port: 80,
  clientPort: 80,
  apiPrefix: 'api',
  apiVersion: 'v1',
  mongoURI: process.env.MONGO_URI,
  sessionSecret: process.env.COOKIE_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  twilioKeys: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN
  },
  contactUsEmail: process.env.CONTACT_US_EMAIL,
  GOOGLE: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
  FACEBOOK: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  },
  TWITTER: {
    clientID: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET
  },
  GITHUB: {
    clientID: process.env.GHUB_CLIENT_ID,
    clientSecret: process.env.GHUB_CLIENT_SECRET
  },
  LINKEDIN: {
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET
  },
  AWS: {
    accessKeyId: process.env.AWS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
}
