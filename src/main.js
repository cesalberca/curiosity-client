import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import 'normalize.css'
import './assets/theme.css'
import './assets/base.css'

Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'en'
})

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
