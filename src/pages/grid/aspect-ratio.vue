<script setup lang="ts"></script>

<template>
  <view class="content">
    <div class="layout">
      <div class="box">box方块</div>
      <div class="box">box方块</div>
      <div class="box">box方块</div>
      <div class="box">
        超级多的文本内容填充，超级多的文本内容填充，超级多的文本内容填充，超级多的文本内容填充，超级多的文本内容填充，超级多的文本内容填充，超级多的文本内容填充
      </div>
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
  width: 80%;
  // min-height: 500px;
  background: #fff;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  padding: 30px;

  /* grid布局 两端对其，最后一行左对齐 */
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}

.layout .box {
  // width: 300px; // grid 布局，子元素不需要设置宽度，自动填充

  /** 本文件演示重点 **/
  // 去掉height后，box高度等于内容高度。
  // 但是设置高度后，高度就固定死了，不灵活。
  // 因此，可以使用 aspect-ratio 自定义宽高比例。
  // height: 200px;

  // 为盒子设置宽高比例，方式1
  aspect-ratio: 16/9; // 宽度/高度，既：16:9 的宽高。1/1 是正方形。

  // 自定义宽高比例，方式2
  // aspect-ratio: 0.5; // 等同于 1/2

  // mdn 文档：https://developer.mozilla.org/zh-CN/docs/Web/CSS/aspect-ratios

  background: #66c7b4;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>
