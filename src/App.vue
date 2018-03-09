<template>
  <section>
    <Navbar :on-language-change="changeLanguage"/>
    <router-view/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from './components/Navbar.vue'
import { loadLanguage } from './langs/utils'

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  selected = 'es'

  changeLanguage() {
    loadLanguage(this.selected)
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
