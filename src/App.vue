<template>
  <section>
    <Navbar :on-language-change="changeLanguage"/>
    <router-view/>
  </section>
</template>

<script>
import Navbar from './components/Navbar'
import { loadLanguage } from './langs/utils'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    selected: 'es'
  }),
  methods: {
    changeLanguage(lang) {
      loadLanguage(lang)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
