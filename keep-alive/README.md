



## 需求

首页->列表页->详情页

- 首页：不管从哪个页面进入，都需要被保活

- 列表页：从首页进入到列表页，列表页是不需要被保活的，从详情页进入列表页（返回）是需要被保活的

- 详情页：不需要被保活

  


## 思路

一个页面需不需要被保活，是什么时候决定的？   

Tips: 在进入下一个页面之前    

避免所有页面被保活？

Tips: keep-alive`组件如果设置了 `include` ，就只有和 `include 匹配的组件会被保活

```html
<!-- vuexKeepAlivePages，被保活的页面数组，[name1,name2,name3] -->
<keep-alive :include="vuexKeepAlivePages">
  <router-view />
</keep-alive>
```

```js
computed: {
  vuexKeepAlivePages () {
    return this.$store.state.keepAlive.VUEX_keepAlivePages
  }
}
```



怎么管理include的数据？

Tips: 存在vuex中，配置好路由信息，通过全局路由守卫去管理

```js
// keepAlive 
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: '首页', keepAlive: true, toKeep: '*' }
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      meta: { title: '组织成本', keepAlive: true, toKeep: ['detail'] }
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      meta: { title: '组织成本', keepAlive: false }
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
```

```js
export const keepAlivePages = 'VUEX_keepAlivePages'
export default {
  state: {
    [keepAlivePages]: []   // 被保活的页面数组: [name1, name2]
  },
  mutations: {
    // 设置保活数组
    [keepAlivePages]: (state, params) => {
      state[keepAlivePages] = params
    },
    // 添加页面到保活数组
    addKeepAlive: (state, params) => {
      state[keepAlivePages] = [...new Set([...state[keepAlivePages], params])]
    },
    // 从保活数组里面删除指定页面
    removeKeepAlive: (state, params) => {
      if (state[keepAlivePages].includes(params)) {
        state[keepAlivePages] = state[keepAlivePages].filter((i) => i !== params)
      }
    }
  }
}
```















