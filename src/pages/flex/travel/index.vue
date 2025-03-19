<template>
  <view class="content">
    <!-- 1.头部搜索 -->
    <view class="search-index">
      <view class="search">搜索:目的地/酒店/景点/航班号 </view>
      <view class="user">我 的</view>
    </view>

    <!-- 2.banner -->
    <view class="focus">
      <image class="focus-img" src="./upload/focus.jpg" mode="widthFix" />
    </view>

    <!-- 3. 局部导航栏 -->
    <view class="local-nav">
      <view class="local-nav-child">
        <view class="local-nav-child-icon1"></view>
        <view class="text">景点玩乐</view>
      </view>
      <view class="local-nav-child">
        <view class="local-nav-child-icon2"></view>
        <view class="text">周边游</view>
      </view>
      <view class="local-nav-child">
        <view class="local-nav-child-icon3"></view>
        <view class="text">美食杯</view>
      </view>
      <view class="local-nav-child">
        <view class="local-nav-child-icon4"></view>
        <view class="text">一日游</view>
      </view>
      <view class="local-nav-child">
        <view class="local-nav-child-icon5"></view>
        <view class="text">当地攻略</view>
      </view>
    </view>

    <!-- 4，  -->
  </view>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
@import "css/index.css";
</style>
