<script setup lang="ts"></script>

<template>
  <view class="content">
    <div class="layout">
      <div class="box box1">box方块</div>
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
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 30px;

  /* grid 布局 */
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(5, 1fr);
}

.layout .box1 {
  // 子元素添加 grid-row属性，网格行
  grid-row: 1 / 3; // 从第1行开始，占2行。既: 1/1+2 => 1/3

  // 子元素添加 grid-column属性，网格列
  grid-column: 1/3; // 从第1列开始，占2列。既: 1/1+2 => 1/3
}

.layout .box {
  // width: 300px; // grid 布局，子元素不需要设置宽度，自动填充
  // height: 200px; // 去掉高度
  background: #ffcf7f;
  border-radius: 8px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: fff;
}
</style>
