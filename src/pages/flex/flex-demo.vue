<script lang="ts" setup></script>

<template>
  <view class="content">
    <div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
    </div>
  </view>
</template>

<style lang="less" scoped>
div {
  /*  给父级添加flex属性 */
  display: flex;

  width: 800px;
  height: 300px;
  background-color: pink;
}

div span {
  width: 150px;
  height: 100px;
  background-color: purple;
}
</style>
