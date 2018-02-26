<template>
  <main class="page-layout__container">
    <ImagesContainer class="page-layout__images-list-container"/>
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

<style scoped lang="scss">
.page-layout {
  &__container {
    display: grid;
    grid-template-columns: 1fr var(--container) 1fr;
  }

  &__images-list-container {
    grid-column-start: 2;
  }
}

@media (max-width: $desktop) {
  .page-layout {
    &__container {
      grid-template-columns: 1fr;
      padding: var(--spacing-unit-s);
    }

    &__images-list-container {
      grid-column-start: 1;
    }
  }
}
</style>
