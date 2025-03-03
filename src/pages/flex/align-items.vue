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
  /*  给父级添加flex属性 */
  display: flex;

  // 修改主轴方向, row、 column
  flex-direction: row;

  /* 侧轴排列方式，单行的情况，使用 align-items */
  // 1，默认值, Y轴是侧轴，就是从上到下排列
  // align-items: flex-start;

  // 2，Y轴是侧轴，就是从下到上排列
  // align-items: flex-end;

  // 3，侧轴居中
  align-items: center;

  // 4，侧轴，拉伸，这种情况下，子盒子不要给 高度(Y是侧轴) 或 宽度(X是侧轴)，否则不生效（修改下面的 div span css 的 width、height）。
  // align-items: stretch;

  width: 800px;
  height: 400px;
  background-color: pink;
}

div span {
  // align-items设置为stretch的时候，height(Y是侧轴) 或 width(X是侧轴) 不要设置
  width: 150px;
  height: 100px;
  background-color: purple;
  color: #fff;
  margin: 10px;
}
</style>
