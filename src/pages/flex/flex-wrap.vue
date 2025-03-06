<script lang="ts" setup>
/**
 * 这是flex布局，flex-wrap 案例demo
 **/

import { directionRange, flexWrapRange } from "@/utils/helper.js";

// flex-direction 属性值范围
const directionRangeRef = ref(directionRange);
// 当前选择的flex-direction
const currentDirectionRef = ref(null);
// 监听flex-direction变化
const onDirectionChange = (e) => {
  currentDirectionRef.value = e;
};

// flex-wrap 属性值范围
const flexWrapRangeRef = ref(flexWrapRange);
// 当前选择的flex-wrap
const currentFlexWrapRangeRef = ref(null);
// 监听flex-wrap变化
const onFlexWrapChange = (e) => {
  currentFlexWrapRangeRef.value = e;
};
</script>

<template>
  <view class="select-container">
    <!-- flex方向 -->
    <uni-section class="select-view">
      <uni-data-select
        label="flex-direction"
        v-model="currentDirectionRef"
        :localdata="directionRangeRef"
        @change="onDirectionChange"
        :clear="false"
      />
    </uni-section>

    <!-- 主轴对其方式 -->
    <uni-section class="select-view">
      <uni-data-select
        label="flex-wrap"
        v-model="currentFlexWrapRangeRef"
        :localdata="flexWrapRangeRef"
        @change="onFlexWrapChange"
        :clear="false"
      />
    </uni-section>
  </view>

  <view class="content">
    <div
      :style="{
        flexDirection: currentDirectionRef,
        flexWrap: currentFlexWrapRangeRef,
      }"
    >
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
    </div>
  </view>
</template>

<style lang="less" scoped>
div {
  /*  给父级添加flex属性 */
  display: flex;

  // 主轴方向 row、 column
  flex-direction: row;

  // flex布局中，默认的子元素是不会换行的。
  // 如果装不下，会缩小子元素的宽度，放在父容器里面

  /* flex-wrap 属性值 */
  // 1，默认子元素不换行，既：nowrap;
  flex-wrap: nowrap;

  // 2，子元素换行
  // flex-wrap: wrap;

  width: 600px;
  height: 400px;
  background-color: pink;
}

div span {
  width: 150px;
  height: 100px;
  background-color: purple;
  color: #fff;
  margin: 10px;
}
</style>
