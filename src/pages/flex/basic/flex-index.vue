<script lang="ts" setup></script>

<template>
  <view class="content">
    <navigator url="/pages/flex/basic/flex-direction">
      <text>父项 - flex-direction</text>
    </navigator>
    <navigator url="/pages/flex/basic/justify-content">
      <text>父项 - justify-content</text>
    </navigator>
    <navigator url="/pages/flex/basic/flex-wrap">
      <text>父项 - flex-wrap</text>
    </navigator>
    <navigator url="/pages/flex/basic/align-items">
      <text>父项 - align-items</text>
    </navigator>
    <navigator url="/pages/flex/basic/align-content">
      <text>父项 - align-content</text>
    </navigator>
    <navigator url="/pages/flex/basic/flex-flow">
      <text>父项 - flex-flow</text>
    </navigator>
    <navigator url="/pages/flex/basic/flex-item-flex">
      <text>子项 - flex属性</text>
    </navigator>
    <navigator url="/pages/flex/basic/flex-item-align-self">
      <text>子项 - align-self属性</text>
    </navigator>
    <navigator url="/pages/flex/basic/flex-item-order">
      <text>子项 - order属性</text>
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
