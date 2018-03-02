const fs = require('fs')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'source-map'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/assets/variables.scss', 'utf-8')
      }
    }
  }
}
