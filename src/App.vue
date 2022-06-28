<template>
  <div id="app">
    <van-nav-bar :title="headTitle">
      <template #left>
        <router-link :to="{name: 'index'}">
          <van-icon name="home-o" color="#333333" size="22" />
        </router-link>
      </template>
    </van-nav-bar>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="content">
      <keep-alive :include="vuexKeepAlivePages">
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  computed: {
    vuexKeepAlivePages() {
      console.log('保活页面', this.$store.state.keepAlive.VUEX_KEEP_ALIVE_PAGES)
      return this.$store.state.keepAlive.VUEX_KEEP_ALIVE_PAGES
    },
    headTitle() {
      return this.$route.meta.title || ''
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
</style>
