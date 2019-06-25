if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Routes.prod')
} else {
  module.exports = require('./Routes.dev')
}
