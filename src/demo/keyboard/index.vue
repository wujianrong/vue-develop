<template>
    <div class="keyboard-box" v-keyboard:keyboardFn>
      <!-- 输入任意文本 -->
      <van-field v-model="text" label="文本" placeholder="请输入" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="digit" type="digit" label="整数" placeholder="请输入" />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field v-model="number" type="number" label="数字" placeholder="请输入" /> 
      <van-field v-model="textarea" type="textarea" label="textarea" placeholder="请输入" />
      <!-- 输入密码 -->
      <van-field v-model="password" type="password" label="密码" placeholder="请输入" />
      <van-radio-group v-model="radio" direction="horizontal" class="radio-group">
        <van-radio name="1">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
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
      password: '',
      textarea: '',
      radio: '1'
    }
  },
  methods: {
    keyboardFn(val) {
      this.$toast(val ? '键盘弹起来了' : '键盘收起了')
    }
  }
}
</script>
<style scoped>
.keyboard-box {
  background: #ffffff;
}
.radio-group {
  padding: 0 14px;
  height: 44px;
}
</style>