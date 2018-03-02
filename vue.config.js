const fs = require('fs')
const merge = require('deepmerge')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'source-map'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options =>
        merge(options, {
          loaders: {
            i18n: '@kazupon/vue-i18n-loader'
          }
        })
      )
  },
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/assets/variables.scss', 'utf-8')
      }
    }
  }
}
