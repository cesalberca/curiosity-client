<template>
  <main class="pl-container">
    <ImagesContainer class="pl-images-list-container"/>
  </main>
</template>

<script>
import ImagesContainer from './../containers/ImagesContainer'

export default {
  name: 'PageLayout',
  components: {
    ImagesContainer
  }
}
</script>

<style scoped>
.pl-container {
  display: grid;
  grid-template-columns: 1fr var(--container) 1fr;
}

.pl-images-list-container {
  grid-column-start: 2;
}
</style>
