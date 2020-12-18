import dev from './dev'
import testing from './testing'
import ci from './ci'
import production from './production'

const env = process.env.NODE_ENV || 'development'

let config

if (env === 'development') {
  config = dev
} else if (env === 'testing') {
  config = testing
} else if (env === 'ci') {
  config = ci
} else if (env === 'production') {
  config = production
}

export default config
