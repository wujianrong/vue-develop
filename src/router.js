import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
// 引入组件
import index from "./demo/index.vue"
import home from "./demo/keep-alive/home.vue"
import list from "./demo/keep-alive/list.vue"
import detail from "./demo/keep-alive/detail.vue"
import keyboard from "./demo/keyboard/index.vue"
import theme from "./demo/theme/index.vue"
import store from './store'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: { title: '菜单', toKeep: '*' }
    },
    {
      path: '/keep-alive',
      name: 'keepAliveHome',
      component: home,
      meta: { title: '保活-首页', toKeep: '*' }
    },
    {
      path: '/keep-alive/list',
      name: 'keepAliveList',
      component: list,
      meta: { title: '保活-列表页', toKeep: ['keepAliveDetail'] }
    },
    {
      path: '/keep-alive/detail',
      name: 'keepAliveDetail',
      component: detail,
      meta: { title: '保活-详情页' }
    },
    {
      path: '/keyboard',
      name: 'keyboard',
      component: keyboard,
      meta: { title: '移动端键盘监听' }
    },
    {
      path: '/theme',
      name: 'theme',
      component: theme,
      meta: { title: '主题色切换' }
    }
  ]
})
// router 全局前置守卫
router.beforeEach((to, form, next) => {
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