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

    <!-- 4，导航  -->
    <view class="nav">
      <view class="nav-common">
        <view class="nav-items">
          <view class="nav-items-item first-colume">酒店</view>
        </view>
        <view class="nav-items">
          <view class="nav-items-item item-bottom">海外酒店</view>
          <view class="nav-items-item">特价酒店</view>
        </view>
        <view class="nav-items">
          <view class="nav-items-item item-bottom">团购</view>
          <view class="nav-items-item">民宿/客栈</view>
        </view>
      </view>
      <view class="nav-common">
        <view class="nav-items">
          <view class="nav-items-item first-colume">机票</view>
        </view>
        <view class="nav-items">
          <view class="nav-items-item item-bottom">火车票</view>
          <view class="nav-items-item">特价机票</view>
        </view>
        <view class="nav-items">
          <view class="nav-items-item item-bottom">汽车票/船票</view>
          <view class="nav-items-item">专车/租车</view>
        </view>
      </view>
      <view class="nav-common">
        <view class="nav-items">
          <view class="nav-items-item first-colume">旅游</view>
        </view>
        <view class="nav-items">
          <view class="nav-items-item item-bottom">门票</view>
          <view class="nav-items-item">目的地攻略</view>
        </view>
        <view class="nav-items">
          <view class="nav-items-item item-bottom">游轮旅行</view>
          <view class="nav-items-item">定制旅行</view>
        </view>
      </view>
    </view>

    <!-- 5，双排导航栏  -->
    <view class="subnav-entry">
      <view class="subnav-entry-item">
        <view class="subnav-entry-icon-wifi"></view>
        <view class="subnav-entry-text">wifi电话卡</view>
      </view>
      <view class="subnav-entry-item">
        <view class="subnav-entry-icon-visa"></view>
        <view class="subnav-entry-text">保险&bull;签证</view>
      </view>
      <view class="subnav-entry-item">
        <view class="subnav-entry-icon-exchange"></view>
        <view class="subnav-entry-text">外币兑换</view>
      </view>
      <view class="subnav-entry-item">
        <view class="subnav-entry-icon-shopping"></view>
        <view class="subnav-entry-text">购物</view>
      </view>
      <view class="subnav-entry-item">
        <view class="subnav-entry-icon-guide"></view>
        <view class="subnav-entry-text">当地向导</view>
      </view>
      <view class="subnav-entry-item">
        <view class="subnav-entry-icon-freego"></view>
        <view class="subnav-entry-text">自由行</view>
      </view>
      <view class="subnav-entry-item">
        <view class="subnav-entry-icon-outplay"></view>
        <view class="subnav-entry-text">境外玩乐</view>
      </view>
      <view class="subnav-entry-item">
        <view class="subnav-entry-icon-giftcard"></view>
        <view class="subnav-entry-text">礼品卡</view>
      </view>
      <view class="subnav-entry-item">
        <view class="subnav-entry-icon-creditcard"></view>
        <view class="subnav-entry-text">信用卡</view>
      </view>
      <view class="subnav-entry-item">
        <view class="subnav-entry-icon-more"></view>
        <view class="subnav-entry-text">更多</view>
      </view>
    </view>

    <!-- 6, 销售模块 -->
    <view class="sales-box">
      <!-- 头部 -->
      <view class="sales-header">
        <view class="sales-header-title"></view>
        <view class="sales-header-more">获取更多福利</view>
      </view>
      <!-- 内容 -->
      <view class="sales-body">
        <view class="sales-body-row">
          <image class="row-image" src="./upload/pic1.jpg" mode="widthFix" />
          <image class="row-image" src="./upload/pic2.jpg" mode="widthFix" />
        </view>
        <view class="sales-body-row">
          <image class="row-image" src="./upload/pic3.jpg" mode="widthFix" />
          <image class="row-image" src="./upload/pic4.jpg" mode="widthFix" />
        </view>
        <view class="sales-body-row">
          <image class="row-image" src="./upload/pic5.jpg" mode="widthFix" />
          <image class="row-image" src="./upload/pic6.jpg" mode="widthFix" />
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
@import "css/index.css";
</style>
