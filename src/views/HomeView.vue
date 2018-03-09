<template>
  <PageLayout>
    <ImagesContainer />
  </PageLayout>
</template>

<script lang="ts">
import PageLayout from './../layouts/PageLayout.vue'
import ImagesContainer from './../containers/ImagesContainer.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    ImagesContainer,
    PageLayout
  }
})
export default class HomeView extends Vue {}
</script>
