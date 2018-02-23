<template>
  <section class="card">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>
.card {
  box-shadow: var(--box-shadow);
}
</style>
