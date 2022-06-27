import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
Vue.config.productionTip = false
Vue.prototype.$store = store
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
