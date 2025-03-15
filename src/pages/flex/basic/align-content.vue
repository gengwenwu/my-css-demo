<script lang="ts" setup>
/**
 * 这是flex布局，align-content 案例 demo
 **/

import { directionRange, alignContentRange } from "@/utils/helper.js";

// flex-direction 属性值范围
const directionRangeRef = ref(directionRange);
// 当前选择的flex-direction
const currentDirectionRef = ref("");
// 监听flex-direction变化
const onDirectionChange = (e) => {
  changeSpanStyle(e, currentAlignContentRef.value);
  currentDirectionRef.value = e;
};

// span样式
const spanStyleRef = ref("span-size");
// align-content 属性值范围
const alignContentRangeRef = ref(alignContentRange);
// 当前选择的align-content
const currentAlignContentRef = ref("");
// 监听align-content变化
const onAlignContentChange = (e) => {
  changeSpanStyle(currentDirectionRef.value, e);
  currentAlignContentRef.value = e;
};

// 设置span样式。因为在 align-content等于"stretch"，高或宽不能设置，否则stretch不生效
function changeSpanStyle(direction: string, alignContent: string) {
  if ("stretch" == alignContent) {
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
        label="align-content"
        v-model="currentAlignContentRef"
        :localdata="alignContentRangeRef"
        @change="onAlignContentChange"
        :clear="false"
      />
    </uni-section>
  </view>

  <view class="content">
    <div
      :style="{
        flexDirection: currentDirectionRef,
        alignContent: currentAlignContentRef,
      }"
    >
      <span :class="spanStyleRef">1</span>
      <span :class="spanStyleRef">2</span>
      <span :class="spanStyleRef">3</span>
      <span :class="spanStyleRef">4</span>
      <span :class="spanStyleRef">5</span>
      <span :class="spanStyleRef">6</span>
    </div>
  </view>
</template>

<style lang="less" scoped>
div {
  /*  给父级添加flex属性 */
  display: flex;
  // 主轴方向 row、 column
  flex-direction: row;

  // 需要设置换行，否则 align-content 不起作用。既：单行情况下，align-content 不起作用。
  flex-wrap: wrap;

  // 因为设置了换行，此时侧轴上控制子元素的对其方式，要使用 align-content
  // 1，默认值，在侧轴的头部开始排列
  align-content: flex-start;

  // 2，在侧轴的尾部开始排列
  // align-content: flex-end;

  // 3，在侧轴中间排列
  // align-content: center;

  // 4，子项在侧轴平分剩余空间
  // align-content: space-around;

  // 5，子项在侧轴先分布在两头，再平分剩余空间
  // align-content: space-between;

  // 6，设置子项元素高度(宽度)平分父元素高度(宽度)。
  // 注意：stretch 情况下，子元素高度(宽度)不要设置，否则不生效。
  // align-content: stretch;

  width: 800px;
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

// align-content默认样式，
// 注意：设置为stretch的时候，height(Y是侧轴) 或 width(X是侧轴) 不要设置，否则 stretch 不生效
.span-size {
  width: 150px;
  height: 100px;
}

// flex-direction 为 row，align-content 为 stretch，span的样式
.span-row-stretch {
  height: auto;
  width: 150px;
}

// flex-direction 为 column，align-content 为 stretch，span的样式
.span-column-stretch {
  height: 100px;
  width: auto;
}
</style>
