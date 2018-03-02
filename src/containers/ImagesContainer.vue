<template>
  <ImagesList :images="images"/>
</template>

<script>
import ImagesList from '../components/ImagesList'
import { getImages } from '../services/imageService'

export default {
  name: 'ImagesContainer',
  components: {
    ImagesList
  },
  data: () => ({
    images: []
  }),
  mounted() {
    this.loadImages()
  },
  methods: {
    async loadImages() {
      this.images = await getImages()
    }
  }
}
</script>
