<script lang="ts" setup>
/**
 * 这是flex布局，flex-flow 案例 demo
 **/

import { directionRange, flexWrapRange } from "@/utils/helper.js";

// flex-direction 属性值范围
const directionRangeRef = ref(directionRange);
// 当前选择的flex-direction
const currentDirectionRef = ref("row");
// 监听flex-direction变化
const onDirectionChange = (e) => {
  currentDirectionRef.value = e;
  flexFlowValue.value = e + " " + currentFlexWrapRef.value;
};

// flex-wrap 属性值范围
const flexWrapRangeRef = ref(flexWrapRange);
// 当前选择的flex-wrap
const currentFlexWrapRef = ref("nowrap");
// 监听flex-wrap变化
const onFlexWrapChange = (e) => {
  currentFlexWrapRef.value = e;
  flexFlowValue.value = currentDirectionRef.value + " " + e;
};

// 定义响应式变量来存储 flex-flow 的值
const flexFlowValue = ref(
  currentDirectionRef.value + " " + currentFlexWrapRef.value
);
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
        v-model="currentFlexWrapRef"
        :localdata="flexWrapRangeRef"
        @change="onFlexWrapChange"
        :clear="false"
      />
    </uni-section>
  </view>

  <view class="flex-flow"> flex-flow: {{ flexFlowValue }} </view>

  <view class="content">
    <div :style="{ flexFlow: flexFlowValue }">
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

  // 主轴方向
  // flex-direction: column;
  // 换行(换列)
  // flex-wrap: wrap;

  // flex-flow是复合属性，设置主轴方向 和 是否换行(换列)。
  // 它是flex-direction + flex-wrap组合。可以实现上面两句代码同等效果。
  flex-flow: row nowrap;

  width: 600px;
  height: 300px;
  background-color: pink;
}

div span {
  width: 150px;
  height: 100px;
  background-color: purple;
  border: 1px solid #fff;
  color: #fff;
  font-size: 32px;
}

.flex-flow {
  font-size: 18px;
  color: red;
  font-weight: 500;
}
</style>
