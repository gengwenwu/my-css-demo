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

  // flex布局中，默认的子元素是不会换行的。
  // 如果装不下，会缩小子元素的宽度，放在父容器里面

  /* flex-wrap 属性值 */
  // 1，默认子元素不换行，既：nowrap;
  // flex-wrap: nowrap;

  // 2，子元素换行
  // flex-wrap: wrap;

  width: 600px;
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
