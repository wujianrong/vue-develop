<template>
  <div class="theme-box">
    <van-field name="switch" label="暗夜模式">
      <template #input>
        <van-switch v-model="switchChecked" size="20" @change="themeChange" />
      </template>
    </van-field>
  </div>
</template>

<script>
import { VUE_THEME_TYPE } from '@/store/modules/theme'
export default {
  data() {
    return {
      switchChecked: false
    }
  },
  created() {
    this.switchChecked = (this.$store.state.theme[VUE_THEME_TYPE] === 'dark')
  },
  methods: {
    themeChange(val) {
      this.$store.commit(VUE_THEME_TYPE, val ? 'dark' : 'light')
    }
  }
}
</script>