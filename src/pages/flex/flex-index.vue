<script lang="ts" setup></script>

<template>
  <view class="content">
    <navigator url="/pages/flex/flex-direction">
      <text>flex-direction</text>
    </navigator>
    <navigator url="/pages/flex/justify-content">
      <text>justify-content</text>
    </navigator>
    <navigator url="/pages/flex/flex-wrap">
      <text>flex-wrap</text>
    </navigator>
    <navigator url="/pages/flex/align-items">
      <text>align-items</text>
    </navigator>
    <navigator url="/pages/flex/align-content">
      <text>align-content</text>
    </navigator>
    <navigator url="/pages/flex/flex-flow">
      <text>flex-flow</text>
    </navigator>
  </view>
</template>

<style lang="less" scoped>
navigator {
  margin: 3px 10px;
  border-bottom: 1px solid blue;
  padding: 2px;
  line-height: 25px;
  color: blue;
  width: fit-content;
}
</style>
