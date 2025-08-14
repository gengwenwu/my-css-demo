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
  //   width: 80%;
  min-height: 500px;
  background: #fff;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 30px;

  /* grid 布局，两端对其，最后一行左对齐 。下面是grid常用3个属性 */
  // 1，grid 常用属性 display
  display: grid;

  // 2，grid 常用属性 gap。设置间距
  gap: 30px; // 30px 间距
  // gap: 30px 50px; // 30px是行间距，50px是列间距

  // 3，grid 常用属性 grid-template-columns。设置列数
  // 使用repeat重复函数，参数1：重复次数；参数2：固定像素、百分比(相对于父布局)、自动填充fr
  grid-template-columns: repeat(5, 1fr);

  // grid-template-columns: 1fr 1fr 1fr 1fr;    // 4列（1fr等于1列）每列宽度相等
  // grid-template-columns: 1fr 200px 1fr 1fr;  // 第2列，宽度200px，其它列均分
  // grid-template-columns: 1fr 2fr 1fr 1fr;    // 第2列，占2份，其它列均分

  // grid响应式布局。这种情况下，width不能设置px，使用%，如:width:80%，否则不生效
  // auto-fill：列数的自适应计算。
  // minmax(260px, 1fr)：列宽的最小值是260px，最大值是1fr。
  // grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}

.layout .box {
  //   width: 300px; // grid 布局，子元素不需要设置宽度，自动填充
  height: 200px;
  background: #ffcf7f;
  border-radius: 8px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: fff;

  // margin-bottom: 40px;
}
</style>
