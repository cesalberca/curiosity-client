<template>
  <ImagesList :images="images"/>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ImagesList from '../components/ImagesList'

export default {
  name: 'ImagesContainer',
  components: {
    ImagesList
  },
  computed: {
    ...mapState(['images'])
  },
  mounted() {
    this.FETCH_IMAGES()
  },
  methods: {
    ...mapActions(['FETCH_IMAGES'])
  }
}
</script>
