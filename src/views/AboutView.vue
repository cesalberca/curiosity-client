<template>
  <PageLayout class="about-view">
    <p>{{ $t('welcome') }}</p>
    <Tabs
      class="tabs">
      <TabPane>
        <span
          slot="label"
          class="about-view__icon"
        ><i class="el-icon-date"/></span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse nostrum distinctio sequi ducimus quam aliquid nobis perspiciatis, fugit cumque dolore, quibusdam, porro asperiores laboriosam consequuntur reprehenderit optio. Mollitia, maxime?
      </TabPane>
      <TabPane label="Config">
        <span
          slot="label"
          class="about-view__icon"
        ><i class="el-icon-date"/></span>
      </TabPane>
      <TabPane label="Role">
        <span
          slot="label"
          class="about-view__icon"
        ><i class="el-icon-more"/></span>
      </TabPane>
      <TabPane label="Task">
        <span
          slot="label"
          class="about-view__icon"
        ><i class="el-icon-search"/></span>
      </TabPane>
    </Tabs>
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

<style lang="scss" scoped>
.about-view {
  &__icon {
    border: 1px solid black;
    border-radius: 50%;
    padding: 10px;
  }

  /deep/ .el-tabs__active-bar {
    display: none;
  }

  /deep/ .el-tabs__nav-wrap::after {
    display: none;
  }
}
</style>
