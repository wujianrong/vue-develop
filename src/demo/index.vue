<template>
  <div>
    <van-cell-group title="keep-alive应用">
      <van-cell title="keep-alive按需保活实现" :to="{name: 'keepAliveHome'}" is-link />
    </van-cell-group>
    <van-cell-group title="实践常用">
      <van-cell title="监听手机键盘弹起/收起" :to="{name: 'keyboard'}" is-link />
      <van-cell title="主题色切换" :to="{name: 'theme'}" is-link />
    </van-cell-group>
  </div>
</template>