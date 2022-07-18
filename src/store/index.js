import Vue from 'vue'
import Vuex from 'vuex'
import keepAlive from './modules/keep-alive'
import theme from './modules/theme'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    keepAlive,
    theme
  }
})