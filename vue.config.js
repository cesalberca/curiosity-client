const Dotenv = require('dotenv-webpack')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'source-map'
    }

    config.plugins.push(new Dotenv())
  }
}
