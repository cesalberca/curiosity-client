import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/theme.css'
import './assets/base.css'

import { i18n } from './langs/i18n'
import { router } from './router'
import { store } from './store'
import { configureElement } from './element'

Vue.config.productionTip = false

configureElement()

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
