<script setup lang="ts"></script>

<template>
  <view class="content">
    <div class="layout">
      <div class="box">
        <img src="/static/images/1.jpeg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/2.jpg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/3.jpeg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/4.jpeg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/5.png" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/6.jpeg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/7.jpg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/8.jpg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/9.jpeg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/10.jpg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/11.jpg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/12.jpeg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/13.jpg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/14.jpeg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/15.jpg" alt="" />
      </div>
      <div class="box">
        <img src="/static/images/16.jpg" alt="" />
      </div>
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
  // height: 200px;

  background: #d1e8e2;
  border-radius: 8px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  // 自定义宽高比例
  aspect-ratio: 9/16;
}

/** 本文件演示重点2 **/
// 如果浏览器不支持aspect-ratio属性，则指定高度为500px
@supports not (aspect-ratio: 9/16) {
  .layout .box {
    height: 500px;
  }
}

.layout .box img {
  // 图片设置宽高，完全等于父级。那么就会出现图片拉伸或压缩的情况
  width: 100%;
  height: 100%;

  /** 本文件演示重点1 **/
  // 图片裁剪。否则，图片会被拉伸。
  // (1), cover; 保持宽高比，填充元素的整个内容框。
  // (2), contain; 保持宽高比，缩放保持图片完整性。
  // (3), fill; 不保证保持原有的比例，内容拉伸填充整个内容容器。
  // mdn文档：https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit
  object-fit: cover;
}
</style>
