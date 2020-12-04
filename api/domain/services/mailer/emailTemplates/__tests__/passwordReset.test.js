const template = ({ link }) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Password Reset</h3>
          <p>Reset password <a href="${link}">here</a>.</p>
        </div>
      </body>
    </html>
  `
}

module.exports = template
