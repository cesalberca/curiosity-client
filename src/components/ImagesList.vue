<template>
  <div>
    <h1>Curiosity dice: {{ $t('hello') }}</h1>
    <Card
      v-for="image in images"
      :key="image.id"
      class="images-list__card">

      <div class="images-list__img">
        <img
          :src="image.img_src"
          alt="">
      </div>

      <div class="images-list__info">
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

<style lang="scss" scoped>
.images-list {
  &__card {
    display: flex;
    flex-direction: row;
    height: 200px;
    width: 100%;
    margin: var(--spacing-unit) 0;
  }

  &__img {
    flex: 2;
  }

  &__img > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    padding: var(--spacing-unit);
    flex: 1;
  }
}
</style>
