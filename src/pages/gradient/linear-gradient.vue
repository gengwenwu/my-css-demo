<script setup lang="ts"></script>

<template>
  <view class="layout">
    <view class="box" v-for="item in 150"> 线性渐变 </view>
  </view>
</template>

<style>
.layout {
  width: 100%;
  min-height: 100vh;

  /**  
   * 线性渐变 linear-gradient
   * mdn 文档：https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient
   * 语法：linear-gradient(方向, 颜色1, 颜色2, ...)
   **/

  /* 方式1，渐变方向：从上到下(默认方向)；渐变: 从红色、黄色 */
  /* background: linear-gradient(red, yellow); */

  /* 方式2，指定渐变方向: */
  /* 2-1，方向：指定角度渐变，从45角度开始；渐变：从红色、黄色、绿色 */
  /* background: linear-gradient(45deg, red, yellow, green); */

  /* 2-2，方向：使用单词to渐变，从左到右开始；渐变：从红色、黄色、绿色 */
  /* background: linear-gradient(to right, red, yellow, green); */
  /* background: linear-gradient(to left bottom, red, yellow, green); */

  /* 3，指定渐变颜色开始位置 */
  /* 3-1，渐变: #FFE8E9、#fff，其中 #fff 从30%位置开始 */
  /* background: linear-gradient(#FFE8E9, #fff 30%); */

  /* 3-2，渐变: #FFE8E9、#fff，其中 #fff 从200px位置开始 */
  /* background: linear-gradient(#ffe8e9, #fff 200px); */

  /**
   * 4，组合使用
   * 小技巧：transparent = rgba(0, 0, 0, 0)
   */
  background: 
    /* 图片，靠右80%位置，居上50px  */
    url(../../static/images/bg_gradient.jpg) no-repeat 80% 50px,
    linear-gradient(to bottom, transparent -100px, #fff 300px),
    linear-gradient(to right, #d2eef9, #ffd1de);
}
</style>
