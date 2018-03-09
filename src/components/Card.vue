<template>
  <section class="card">
    <slot />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Card extends Vue {}
</script>

<style scoped>
.card {
  box-shadow: var(--box-shadow);
}
</style>
