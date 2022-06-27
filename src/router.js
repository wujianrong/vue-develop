/*
 * @Description: 
 * @LastEditTime: 2021-12-13 17:26:53
 * @LastEditors: wujianrong
 */
import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
// 引入组件
import home from "./demo/keep-alive/home.vue"
import list from "./demo/keep-alive/list.vue"
import detail from "./demo/keep-alive/detail.vue"
import keyboard from "./demo/keyboard/index.vue"
import store from './store'

const router = new VueRouter({
  routes: [
    {
      path: '/keep-alive',
      name: 'home',
      component: home,
      meta: { title: '首页', toKeep: '*' }
    },
    {
      path: '/keep-alive/list',
      name: 'list',
      component: list,
      meta: { title: '列表页', toKeep: ['detail'] }
    },
    {
      path: '/keep-alive/detail',
      name: 'detail',
      component: detail,
      meta: { title: '详情页' }
    },
    {
      path: '/keyboard',
      name: 'keyboard',
      component: keyboard,
      meta: { title: '移动端键盘监听' }
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