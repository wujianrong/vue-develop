export const KEEP_ALIVE_PAGES = 'VUEX_KEEP_ALIVE_PAGES'
export default {
  state: {
    [KEEP_ALIVE_PAGES]: []   // 被保活的页面数组: [name1, name2]
  },
  mutations: {
    // 设置保活数组
    [KEEP_ALIVE_PAGES]: (state, params) => {
      state[KEEP_ALIVE_PAGES] = params
    },
    // 添加页面到保活数组
    addKeepAlive: (state, params) => {
      state[KEEP_ALIVE_PAGES] = [...new Set([...state[KEEP_ALIVE_PAGES], params])]
    },
    // 从保活数组里面删除指定页面
    removeKeepAlive: (state, params) => {
      if (state[KEEP_ALIVE_PAGES].includes(params)) {
        state[KEEP_ALIVE_PAGES] = state[KEEP_ALIVE_PAGES].filter((i) => i !== params)
      }
    }
  }
}