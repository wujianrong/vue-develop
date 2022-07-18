
import storage from '@/utils/storage'
export const VUE_THEME_TYPE = 'VUE_THEME_TYPE'
export default {
  state: {
    [VUE_THEME_TYPE]: 'light'   // dark 黑夜模式    light  默认模式
  },
  mutations: {
    // 设置主题模式
    [VUE_THEME_TYPE]: (state, params) => {
      storage.set('APP_THEME', params)
      state[VUE_THEME_TYPE] = params
    }
  }
}