<template>
  <div>
    <van-cell title="首页 " :to="{name: 'keepAliveHome'}" is-link />
    <van-cell title="列表页" :to="{name: 'keepAliveList'}" is-link />
    <van-cell title="详情页" :to="{name: 'keepAliveDetail'}" is-link />
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
      详情页
    </van-divider>
    <van-field v-model="input" label="详情" placeholder="请输入" />
  </div>
</template>
<script>
export default {
  name: 'keepAliveDetail',
  data() {
    return {
      input: ''
    }
  }
}
</script>