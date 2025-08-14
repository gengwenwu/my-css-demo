<script setup lang="ts"></script>

<template>
  <view class="content">
    <div class="layout">
      <div class="box">box方块</div>
      <div class="box">box方块</div>
      <div class="box">box方块</div>
      <div class="box">box方块</div>
      <div class="box">box方块</div>
      <div class="box">box方块</div>
      <div class="box">box方块</div>
      <div class="box">box方块</div>
      <div class="box">box方块</div>
      <div class="box">box方块</div>
      <!-- <div class="box">box方块</div> -->
    </div>
  </view>
</template>

<style lang="less" scoped>
.content {
  background: #f6f6f6;
}

.layout {
  width: 1400px;
  min-height: 500px;
  background: #fff;
  border-radius: 10px;
  margin: 0 auto; // 上下margin0，左右居中
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); // 边框添加阴影
  padding: 30px;

  /* flex 布局 */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.layout .box {
  width: 300px;
  height: 200px;
  background: #7c9fb0;
  border-radius: 8px;
  padding: 10px;

  // /* 1, 实现文字居中 */
  //   line-height: 200px;
  //   text-align: center;

  /* 2, 整体实中，*/
  display: flex;
  align-items: center;
  justify-content: center;
  color: fff;

  margin-bottom: 40px;
}
</style>
