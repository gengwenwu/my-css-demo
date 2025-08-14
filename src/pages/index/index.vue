<script setup lang="ts">
import { ref } from "vue";

const demosRef = ref([
  {
    text: "flex",
    url: "/pages/flex/flex-index",
    openType: "navigate",
  },
  {
    text: "网格布局 -> flex实现方式",
    url: "/pages/grid/flex-impl",
    openType: "navigate",
  },
  {
    text: "网格布局 -> grid实现方式",
    url: "/pages/grid/grid-impl",
    openType: "navigate",
  },
  {
    text: "网格布局 -> grid实现Bilibili布局",

    url: "/pages/grid/grid-impl-bilibii",
    openType: "navigate",
  },
]);
</script>

<template>
  <view class="content">
    <view class="title"> css 学习案例 </view>
    <view class="demos">
      <view class="item" v-for="item in demosRef" :key="item.text">
        <navigator :url="item.url" :open-type="item.openType">
          <text>{{ item.text }}</text>
        </navigator>
      </view>
    </view>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */

  .title {
    font-size: 20px;
    font-weight: 800;
  }

  .demos {
    padding: 10px 6px;

    .item {
      border-bottom: 1px solid blue;
      padding: 2px;
      line-height: 25px;
      color: blue;
      width: fit-content;
    }
  }
}
</style>
