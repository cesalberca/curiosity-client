<template>
  <PageLayout>
    <ImagesContainer />
  </PageLayout>
</template>

<script>
import PageLayout from './../layouts/PageLayout'
import ImagesContainer from './../containers/ImagesContainer'

export default {
  name: 'HomeView',
  components: {
    PageLayout,
    ImagesContainer
  }
}
</script>
