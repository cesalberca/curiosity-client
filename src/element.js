import Vue from 'vue'
import { Tabs, TabPane } from 'element-ui'

export function configureElement() {
  Vue.component('Tabs', Tabs)
  Vue.component('TabPane', TabPane)
}
