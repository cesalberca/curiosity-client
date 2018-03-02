<template>
  <div>
    <select
      v-model="selected"
      @change="changeLanguage">
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
    <ImagesList :images="images"/>
  </div>
</template>

<script>
import ImagesList from '../components/ImagesList'
import { getImages } from '../services/imageService'
import { loadLanguageAsync } from '../langs/utils'

export default {
  components: {
    ImagesList
  },
  data() {
    return {
      images: [],
      selected: 'es'
    }
  },
  mounted() {
    this.loadImages()
  },
  methods: {
    async loadImages() {
      this.images = await getImages()
    },
    changeLanguage() {
      loadLanguageAsync(this.selected)
    }
  }
}
</script>
