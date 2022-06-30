import Vue from 'vue'
import Vuex from 'vuex'
import keepAlive from './modules/keep-alive'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    keepAlive
  }
})