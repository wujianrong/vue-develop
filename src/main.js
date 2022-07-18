import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import storage from './utils/storage'
Vue.config.productionTip = false
Vue.prototype.$store = store
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/styles/theme.scss'
import '@/assets/styles/vant.scss'
import '@/assets/styles/main.scss'
Vue.use(Vant);
const app = new Vue({
  router,
  render: h => h(App),
})
store.commit('VUE_THEME_TYPE', storage.get('APP_THEME'))
app.$mount('#app')
