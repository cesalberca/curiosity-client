<template>
  <nav class="nav">
    <router-link to="/">{{ $t('home') }}</router-link>
    <router-link to="/about">{{ $t('about') }}</router-link>
    <select
      v-model="selected"
      class="nav__lang"
      @change="changeLanguage"
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {
  @Prop() onLanguageChange: (language: string) => void
  selected = 'es'

  changeLanguage() {
    this.onLanguageChange(this.selected)
  }
}
</script>

<style scoped lang="scss">
.nav {
  background-color: var(--color-primary);
  width: 100%;
  display: flex;
  padding: var(--spaced);

  &__lang {
    margin-left: auto;
  }

  & > a {
    padding: 0 var(--spaced-s);
    text-decoration: none;
    font-size: 1.5rem;
    color: var(--color-foreground);
  }
}
</style>
