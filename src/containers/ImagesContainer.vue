<template>
  <ImagesList :images="images"/>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { Action, State } from 'vuex-class'
import ImagesList from '../components/ImagesList.vue'
import { Component } from 'vue-property-decorator'
import { Images } from '@/models/Images'

@Component({
  components: {
    ImagesList
  }
})
export default class ImagesContainer extends Vue {
  @State images!: Images[]

  @Action('FETCH_IMAGES') fetchImages: Function

  mounted() {
    this.fetchImages()
  }
}
</script>
