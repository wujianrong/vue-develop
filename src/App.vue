<template>
  <div id="app" :class="[appTheme]">
    <app-navbar />
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
import appNavbar from '@/components/navbar.vue'
import { VUE_THEME_TYPE } from '@/store/modules/theme'
export default {
  name: 'App',
  components: {
    appNavbar
  },
  computed: {
    vuexKeepAlivePages() {
      console.log('保活页面', this.$store.state.keepAlive.VUEX_KEEP_ALIVE_PAGES)
      return this.$store.state.keepAlive.VUEX_KEEP_ALIVE_PAGES
    },
    appTheme() {
      return `theme-${this.$store.state.theme[VUE_THEME_TYPE]}`
    }
  },
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--theme-bg);
  color: var(--font-color);
  height: 100%;
  box-sizing: border-box;
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
