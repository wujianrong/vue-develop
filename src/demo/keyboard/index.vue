<template>
    <div class="keyboard box" v-keyboard:keyboardFn>
      <!-- 输入任意文本 -->
      <van-field v-model="text" label="文本" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" label="手机号" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="digit" type="digit" label="整数" />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field v-model="number" type="number" label="数字" />
      <!-- 输入密码 -->
      <van-field v-model="password" type="password" label="密码" />
    </div>
</template>

<script>
import keyboard from './keyboard'
export default {
  directives: { keyboard },
  data() {
    return {
      text: '',
      tel: '',
      digit: '',
      number: '',
      password: ''
    }
  },
  methods: {
    keyboardFn(val) {
      this.$toast(val ? '键盘弹起来了' : '键盘收起了')
    }
  }
}
</script>