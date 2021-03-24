/**
 * Force load with https on production environment
 * https://devcenter.heroku.com/articles/http-routing#heroku-headers
 */
module.exports = function (environments, status) {
  environments = environments || ['production']
  status = status || 302
  return function (req, res, next) {
    if (environments.indexOf(process.env.NODE_ENV) >= 0) {
      let hasSubdomain = req.subdomains.includes('www')

      if (req.headers['x-forwarded-proto'] !== 'https') {
        if (hasSubdomain) {
          res.redirect(status, 'https://' + req.hostname + req.originalUrl)
        } else {
          // this scenario needs to be modified if there are any other alternate subdomains such as...
          // [blog|app|subdomain].trademebooks.com
          res.redirect(status, 'https://www.' + req.hostname + req.originalUrl)
        }
      } else if (
        req.headers['x-forwarded-proto'] === 'https' &&
        !req.subdomains.includes('www')
      ) {
        res.redirect(status, 'https://www.' + req.hostname + req.originalUrl)
      } else {
        next()
      }
    } else {
      next()
    }
  }
}
