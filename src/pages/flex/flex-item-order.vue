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
}

div span:nth-child(3) {
  // 将第3个盒子，从尾部提前到第1个位置。
  // 默认order是0，写-1，所以排到最前头
  order: -1;
}

span:nth-child(3) {
  // 将第3个盒子，从尾部提前到第1个位置。
  // 默认order是0，写-1，所以排到最前头
  order: -1;
}

div span {
  color: #fff;
  font-size: 32px;
  width: 150px;
  height: 100px;
  background-color: purple;
  margin-right: 5px;
}
</style>
