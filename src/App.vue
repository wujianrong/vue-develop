<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="menus">
      <router-link :to="{name: 'home'}">首页</router-link>
      <router-link :to="{name: 'list'}">列表页</router-link>
      <router-link :to="{name: 'detail'}">详情页</router-link>
    </div>
    <keep-alive :include="vuexKeepAlivePages">
      <router-view />
    </keep-alive>
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
      }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menus {
  margin: 20px auto;
  width: 500px;
  display: flex;
  justify-content: space-around;
}
</style>
