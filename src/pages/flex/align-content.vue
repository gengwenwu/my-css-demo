<script lang="ts" setup></script>

<template>
  <view class="content">
    <div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
    </div>
  </view>
</template>

<style lang="less" scoped>
div {
  /*  给父级添加flex属性 */
  display: flex;
  // 主轴方向 row、 column
  flex-direction: row; 

  // 需要设置换行，否则 align-content 不起作用。既：单行情况下，align-content 不起作用。
  flex-wrap: wrap;

  // 因为设置了换行，此时侧轴上控制子元素的对其方式，要使用 align-content
  // 1，默认值，在侧轴的头部开始排列
  align-content: flex-start;

  // 2，在侧轴的尾部开始排列
  // align-content: flex-end;

  // 3，在侧轴中间排列
  // align-content: center;

  // 4，子项在侧轴平分剩余空间
  // align-content: space-around;

  // 5，子项在侧轴先分布在两头，再平分剩余空间
  // align-content: space-between;

  // 6，设置子项元素高度(宽度)平分父元素高度(宽度)。
  // 注意：stretch 情况下，子元素高度(宽度)不要设置，否则不生效。
  // align-content: stretch;

  width: 800px;
  height: 400px;
  background-color: pink;
}

div span {
  width: 150px;
  height: 100px;
  background-color: purple;
  color: #fff;
  margin: 10px;
}
</style>
