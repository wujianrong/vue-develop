/*
 * @Description: 
 * @LastEditTime: 2021-12-13 17:26:53
 * @LastEditors: wujianrong
 */
import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
// 引入组件
import home from "./pages/home.vue"
import list from "./pages/list.vue"
import detail from "./pages/detail.vue"
import store from './store'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: { title: '首页', toKeep: '*' }
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      meta: { title: '列表页', toKeep: ['detail'] }
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      meta: { title: '详情页' }
    }
  ]
})
// router 全局前置守卫
router.beforeEach((to, form, next) => {
  console.log({store})
  console.log({to})
  console.log({form})
  // 决定当前页面是否需要被保活
  if (form.meta.toKeep) {
    if (form.meta.toKeep === '*' || form.meta.toKeep.includes(to.name)) {
      store.commit('addKeepAlive', form.name)
      setTimeout(() => {
        next()
      })
      return
    }
  }
  store.commit('removeKeepAlive', form.name)
  next()
})
export default router