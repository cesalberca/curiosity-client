<template>
  <ImagesList :images="images"/>
</template>

<script lang="ts">
import { Action, State } from 'vuex-class'
import ImagesList from '@/components/ImagesList.vue'
import { Component, Vue } from 'vue-property-decorator'
import { Image } from '@/models/Image'

@Component({
  components: {
    ImagesList
  }
})
export default class ImagesContainer extends Vue {
  @State images: Image[]

  @Action('FETCH_IMAGES') fetchImages: Function

  mounted() {
    this.fetchImages()
  }
}
</script>
