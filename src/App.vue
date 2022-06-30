<template>
  <div id="app">
    <van-nav-bar :title="headTitle" v-if="single">
      <template #left>
        <router-link :to="{name: 'index'}">
          <van-icon name="home-o" color="#333333" size="22" />
        </router-link>
      </template>
    </van-nav-bar>
    <div class="content">
      <keep-alive :include="vuexKeepAlivePages">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    vuexKeepAlivePages() {
      console.log('保活页面', this.$store.state.keepAlive.VUEX_KEEP_ALIVE_PAGES)
      return this.$store.state.keepAlive.VUEX_KEEP_ALIVE_PAGES
    },
    headTitle() {
      return this.$route.meta.title || ''
    },
    single() {
      return this.$route.query && this.$route.query.single !== '1'
    }
  },
}
</script>

<style>
html, body {
  background-color: #f7f8fa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content {
  padding: 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
 
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
