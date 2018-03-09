<template>
  <main class="page-layout">
    <slot />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default class PageLayout extends Vue {}
</script>

<style scoped lang="scss">
.page-layout {
  display: grid;
  grid-template-columns: 1fr var(--container) 1fr;
}

.page-layout >>> * {
  grid-column-start: 2;
}

@media (max-width: $desktop) {
  .page-layout {
    grid-template-columns: 1fr;
    padding: var(--spaced-s);
  }

  .page-layout >>> * {
    grid-column-start: 1;
  }
}
</style>
