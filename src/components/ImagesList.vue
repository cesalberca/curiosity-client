<template>
  <div>
    <h1>Curiosity</h1>
    <Card class="il-card" v-for="image in images" :key="image.id">
      <div class="il-img">
        <img :src="image.img_src" alt="">
      </div>

      <div class="il-info">
        <h2>{{ image.camera.full_name }}</h2>
        <span>{{ image.earth_date }}</span>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from './Card'
export default {
  name: 'ImagesList',
  components: {
    Card
  },
  props: {
    images: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.il-card {
  display: flex;
  flex-direction: row;
  height: 200px;
  width: 100%;
  margin: var(--spacing-unit) 0;
}

.il-img {
  flex: 2;
}

.il-img > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.il-info {
  padding: var(--spacing-unit);
  flex: 1;
}
</style>
