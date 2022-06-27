<!--
 * @Description: 
 * @LastEditTime: 2021-12-13 17:19:42
 * @LastEditors: wujianrong
-->
<template>
  <div>
    首页:<input type="text" v-model="inptu">
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      inptu: ''
    }
  }
}
</script>