<script setup lang="ts"></script>

<template>
  <view class="content">
    <view class="conic"></view>
    <view class="radiation"></view>
    <view class="loading"></view>

    <view class="layout">
      <image src="../../static/logo.png" mode="aspectFit" />
    </view>
  </view>
</template>

<style>
.content {
  & > view {
    margin: 15px 20px;
    width: 200px;
    height: 200px;
  }
}

/**  
   * 锥形渐变 conic-gradient
   * mdn 文档：https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/conic-gradient
   *
   * 语法：conic-gradient(颜色1, 颜色2 ...)
   **/
.conic {
  border-radius: 50%;

  /* 方式1，基本用法，从0°开始(默认是 12 点钟方向)，顺时针，渐变到360°。如果没有给颜色设置角度，渐变平均分配 */
  background-image: conic-gradient(red, yellow, green, cyan, red);

  /* 方式2，指定渐变色 百分比角度 */
  /* red: 渐变从 0% 的位置开始，此时的颜色是纯red */
  /* yellow: 从 0% 到 10% 的区域（12 点钟方向顺时针旋转36度），从 red 渐变到 yellow。在10%精确位置，颜色是纯yellow */
  /* green: 从 10% 到 50% 的区域（36度旋转到180度，即6点钟方向），从 yellow 渐变到 green。在50%精确位置，颜色是纯green */
  background-image: conic-gradient(red 0%, yellow 10%, green 50%, cyan, red);

  /* 方式3，指定渐变色 角度。0°是纯red，90°是纯yellow，100°是纯green。*/
  background-image: conic-gradient(
    red 0deg,
    yellow 90deg,
    green 100deg,
    cyan,
    red
  );
}

.radiation {
  border-radius: 1px solid #ccc;

  /* 方式4，精确指定角度范围。0-10deg 是 #3772ff，10-20deg 是 transparent。以此类推... */
  background-image: conic-gradient(
    #3772ff 0 10deg,
    transparent 10deg 20deg,  
    #3772ff 20deg 30deg,
    transparent 30deg 40deg
  );

  /* 方式5，精确指定角度范围。使用 repeating-conic-gradient 重复渐变, 只要指定规律前几个参数，后面的参数会自动重复 */
  background-image: repeating-conic-gradient(
    #3772ff 0 5deg,
    transparent 5deg 10deg,
    cyan 10deg 15deg
  );
}

  /** 
   * 实现一个蓝色loading加载样式
   **/
.loading {
  border-radius: 50%;
  width: 60px !important;
  height: 60px !important;

  /**
   * 实现原理：
   * transparent 0: 从 0 度（12 点钟方向）开始，颜色是完全透明的。
   * transparent 60deg: 从 0 度到 60 度，颜色保持为完全透明。
   * #337eef 360deg: 从 60 度开始，颜色开始从 transparent 渐变到 #337eef，一直持续到 360 度完成。
   **/
  background-image: conic-gradient(
    transparent 0,
    transparent 60deg,
    #337eef 360deg
  );

  /** 
   * 遮挡中间区域，这样看起来像 loading 效果。
   * 
   * mask基础理论：
   *  (1), 在 mask 中，白色 (#fff) 代表“完全可见”（不遮盖）。
   *  (2), 透明 (transparent) 或黑色代表“完全不可见”（完全遮盖）。
   * 
   * 代码解释：
   *  transparent calc(55% - 1px): 从中心点到半径接近55%-1px区域，遮罩是透明的（完全遮盖）。
   *  #fff 55%：从半径55%位置开始，遮罩是白色的（不遮盖）。

   * 技巧：-1px，主要减少锯齿。 
   */
  mask: radial-gradient(transparent calc(55% - 1px), #fff 55%);
  /* 微信小程序支持 */
  -webkit-mask: radial-gradient(transparent calc(55% - 1px), #fff 55%);
  /* 动画 */
  animation: rotate 0.6s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

/**
 * 实现一个棋盘格布局
 */
.layout {
  width: 300px;
  height: 300px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;

  image {
    width: 60%;
    height: 60%;
  }

  /**
    * 实现原理：通过 conic-gradient 实现棋盘效果，再通过 background-size 控制网格大小。
    * 
    *   角度 0% 到 25% 是 #ccc
    *   角度 25% 到 50% 是 #fff
    *   角度 50% 到 75% 是 #ccc
    *   角度 75% 到 100% 是 #fff
    *
    *   通过 background-size 控制网格大小
    **/
  background-image: conic-gradient(
    #ccc 0 25%,
    #fff 25% 50%,
    #ccc 50% 75%,
    #fff 75%
  );
  background-size: 15px 15px;
}
</style>
