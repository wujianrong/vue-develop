<template>
  <van-nav-bar class="app-navbar-box" :title="headTitle" v-if="single">
    <template #left>
      <router-link :to="{name: 'index'}">
        <van-icon name="home-o" class="icon-home-o" size="22" />
      </router-link>
    </template>
  </van-nav-bar>
</template>
<script>
export default {
  computed: {
    headTitle() {
      return this.$route.meta.title || ''
    },
    single() {
      return this.$route.query && this.$route.query.single !== '1'
    }
  }
}
</script>
<style scoped lang="scss">
.app-navbar-box {
  background-color: var(--theme-bg);
  &::v-deep .van-nav-bar__title, .icon-home-o {
    color: var(--font-color);
  }
}
</style>