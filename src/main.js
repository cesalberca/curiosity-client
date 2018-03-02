import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/theme.css'
import './assets/base.css'
import { i18n } from './langs/i18n'

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
