<template>
  <PageLayout class="about-view">
    <p>{{ $t('welcome') }}</p>
    <Tabs
      class="about-view__tabs">
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

<script lang="ts">
import Vue from 'vue'
import PageLayout from './../layouts/PageLayout.vue'
import ImagesContainer from './../containers/ImagesContainer.vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    PageLayout,
    ImagesContainer
  }
})
export default class AboutView extends Vue {}
</script>

<style lang="scss" scoped>
.about-view {
  &__tabs {
    display: flex;
    flex-direction: column;
  }

  &__icon {
    border: 2px solid #dfdfdf;
    border-radius: 50%;
    padding: 10px;
  }

  /deep/ .el-tabs__active-bar {
    --triangle-size: 10px;

    // Element uses inline styles to give a width, se we *must* use !important in this case
    width: 0 !important;
    height: 0;
    bottom: -60%;
    margin-left: 7px;
    background-color: transparent;
    border-left: var(--triangle-size) solid transparent;
    border-right: var(--triangle-size) solid transparent;
    border-bottom: var(--triangle-size) solid #dfdfdf;
  }

  /deep/ .el-tabs__nav-scroll {
    overflow: visible;
  }

  /deep/ .el-tabs__nav-wrap {
    overflow: visible;
  }

  /deep/ .el-tabs__nav-wrap::after {
    display: none;
  }

  /deep/ .el-tabs__content {
    overflow: hidden;
    position: relative;
    margin-top: var(--spaced-s);
    background-color: #dfdfdf;
    padding: var(--spaced);
    border-radius: 3px;
  }
}
</style>
