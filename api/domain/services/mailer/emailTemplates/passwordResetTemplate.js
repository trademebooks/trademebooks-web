const config = require('../../../../config')

const basePath = `${config.baseUrl}${config.port}`

const template = ({ token }) => {
  return `
    <html>
      <body>
        <div>
          <h2>trademebooks Password Reset</h2>
          <p>Hi yichenzhu1,</p>
          
          <p>It seems like you're having trouble logging into trademebooks.</p>

          <p>To reset your password, click here <a href="${basePath}/reset-password/${token}">here</a>.</p>

          <p>If that link does not work, try using this one here: ${basePath}/reset-password/${token}.</p>
        </div>
      </body>
    </html>
  `
}

module.exports = template
