<script lang="ts" setup>
/**
 * 这是flex布局，align-items 案例demo
 **/

import { directionRange, alignItemsRange } from "@/utils/helper.js";

// flex-direction 属性值范围
const directionRangeRef = ref(directionRange);
// 当前选择的flex-direction
const currentDirectionRef = ref("");
// 监听flex-direction变化
const onDirectionChange = (e) => {
  changeSpanStyle(e, currentAlignItemsRef.value);
  currentDirectionRef.value = e;
};

// span样式
const spanStyleRef = ref("span-size");
// align-items 属性值范围
const alignItemRangeRef = ref(alignItemsRange);
// 当前选择的align-items
const currentAlignItemsRef = ref("");
// 监听align-items变化
const onAlignItemsChange = (e) => {
  changeSpanStyle(currentDirectionRef.value, e);
  currentAlignItemsRef.value = e;
};

// 设置span样式。因为在 align-items等于"stretch"，高或宽不能设置，否则stretch不生效
function changeSpanStyle(direction: string, alignItems: string) {
  if ("stretch" == alignItems) {
    if ("column" === direction) {
      spanStyleRef.value = "span-column-stretch";
    } else {
      spanStyleRef.value = "span-row-stretch";
    }
  } else {
    spanStyleRef.value = "span-size";
  }
}
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
        label="align-items"
        v-model="currentAlignItemsRef"
        :localdata="alignItemRangeRef"
        @change="onAlignItemsChange"
        :clear="false"
      />
    </uni-section>
  </view>

  <view class="content">
    <div
      :style="{
        flexDirection: currentDirectionRef,
        alignItems: currentAlignItemsRef,
      }"
    >
      <span :class="spanStyleRef">1</span>
      <span :class="spanStyleRef">2</span>
      <span :class="spanStyleRef">3</span>
    </div>
  </view>
</template>

<style lang="less" scoped>
div {
  /*  给父级添加flex属性 */
  display: flex;

  // 修改主轴方向, row、 column
  flex-direction: row;

  /* 侧轴排列方式，单行的情况，使用 align-items */
  // 1，默认值, 子项在侧轴的起始位置。如：Y轴是侧轴，就是从上到下排列，既：flex-start表示在“上”位置
  align-items: flex-start;

  // 2，子项在侧轴的尾部位置。如：Y轴是侧轴，就是从下到上排列，既：flex-end 表示在“下”位置
  // align-items: flex-end;

  // 3，子项在侧轴居中位置。如：Y轴是侧轴，就是侧轴居中，既：center 表示在上下居“中”位置
  // align-items: center;

  // 4，侧轴，拉伸，这种情况下，子盒子不要给 高度(Y是侧轴) 或 宽度(X是侧轴)，否则不生效（修改下面的 div span css 的 width、height）。
  // align-items: stretch;

  width: 800px;
  height: 400px;
  background-color: pink;
}

div span {
  // 复用 span-size 的样式
  // &:extend(.span-size all);
  background-color: purple;
  color: #fff;
  margin: 10px;
}

// align-items默认样式，
// 注意：设置为stretch的时候，height(Y是侧轴) 或 width(X是侧轴) 不要设置，否则 stretch 不生效
.span-size {
  width: 150px;
  height: 100px;
}

// flex-direction 为 row，align-items 为 stretch，span的样式
.span-row-stretch {
  height: auto;
  width: 150px;
}

// flex-direction 为 column，align-items 为 stretch，span的样式
.span-column-stretch {
  height: 100px;
  width: auto;
}
</style>
