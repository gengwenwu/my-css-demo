<script setup lang="ts"></script>

<template>
  <view class="layout">
    <view class="box" v-for="item in 15"> 镜像渐变 </view>
  </view>
</template>

<style>
.layout {
  width: 100%;
  min-height: 100vh;

  /**  
   * 镜像渐变 radial-gradient
   * mdn 文档：https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/radial-gradient
   *
   * 语法：radial-gradient(渐变形状|渐变区域(大小) 渐变起始位置, 颜色1, 颜色2 ...)
   **/

  /* 方式1，基本用法，使用默认的渐变形状(圆形)和渐变起始位置，既：从容器中心向四周展开 */
  /* background: radial-gradient(#e66465, #9198e5); */

  /* 方式2，指定渐变区域，既：指定宽高 */
  /* 方式2-1，宽高都是100px，可以缩写 */
  /* background: radial-gradient(100px, #e66465, #9198e5); */

  /* 方式2-2，宽高分别是100px、200px */
  /* background: radial-gradient(100px 200px, #e66465, #9198e5); */

  /* 方式3，指定渐变起始位置，横坐标 + 纵坐标 */
  /* 方式3-1，数值方式：at 0 300px, 表示：横坐标0px，纵坐标300px */
  /* background: radial-gradient(100px 200px at 0px 300px, #e66465, #9198e5); */

  /* 方式3-2，百分比方式：at 50% 50%, 表示：横坐标50%，纵坐标50% */
  /* background: radial-gradient(100px 200px at 50% 50%, #e66465, #9198e5); */

  /* 方式3-3，关键词方式：at right top, 表示：横坐标右侧，纵坐标顶部 */
  /* background: radial-gradient(100px 200px at right top, #e66465, #9198e5); */

  /* 方式3-4，混搭方式：at 50% 100px, 表示：横坐标50%，纵坐标100px */
  /* background: radial-gradient(100px 200px at 50% 100px, #e66465, transparent); */

  /**
   * 4，组合使用
   */
  background: 
    /* 使用线性渐变 */
    linear-gradient(to bottom, transparent, #fff 400px),
    /* 渐变区域：屏幕宽度90%，高度300px */
    radial-gradient(90% 300px at left top, #95e0dc, transparent),
    /* 渐变区域：屏幕宽度60%，300px */
    radial-gradient(60% 300px at right top, #d3cbfc, transparent);

    
}
</style>
