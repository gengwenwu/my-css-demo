<script lang="ts" setup></script>

<template>
  <view class="content">
    <div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
    </div>
  </view>
</template>

<style lang="less" scoped>
div {
  /*  给父级添加flex属性 */
  display: flex;

  // 主轴方向
  // flex-direction: column;
  // 换行(换列)
  // flex-wrap: wrap;

  // flex-flow是复合属性，设置主轴方向 和 是否换行(换列)。
  // 它是flex-direction + flex-wrap组合。可以实现上面两句代码同等效果。
  flex-flow: column wrap;

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
