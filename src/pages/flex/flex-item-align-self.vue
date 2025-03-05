<script lang="ts" setup></script>

<template>
  <view class="content">
    <div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  </view>
</template>

<style lang="less" scoped>
div {
  width: 80%;
  height: 300px;
  background-color: pink;

  /*  给父级添加flex属性 */
  display: flex;

  // 让所有子盒子沿着侧轴底端对齐
  // align-items: flex-end;
}

div span:nth-child(3) {
  // 让第3个盒子沿着侧轴底端对齐
  align-self: flex-end;
}

div span {
  width: 150px;
  height: 100px;
  background-color: purple;
  margin-right: 5px;
}
</style>
