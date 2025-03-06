<script lang="ts" setup>
import { directionRange, justifyContentRange } from "@/utils/helper.js";

/**
 * 这是flex布局，justify-content 案例demo
 **/

// flex-direction 属性值范围
const directionRangeRef = ref(directionRange);
// 当前选择的flex-direction
const currentDirectionRef = ref(null);
// 监听flex-direction变化
const onDirectionChange = (e) => {
  currentDirectionRef.value = e;
};

// justify-content 属性值范围
const justifyContentRangeRef = ref(justifyContentRange);
// 当前选择的justify-content
const currentjustifyContentRef = ref(null);
// 监听justify-content变化
const onJustifyContentChange = (e) => {
  currentjustifyContentRef.value = e;
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
        label="justify-content"
        v-model="currentjustifyContentRef"
        :localdata="justifyContentRangeRef"
        @change="onJustifyContentChange"
        :clear="false"
      />
    </uni-section>
  </view>

  <view class="content">
    <div
      :style="{
        flexDirection: currentDirectionRef,
        justifyContent: currentjustifyContentRef,
      }"
    >
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
    </div>
  </view>
</template>

<style lang="less" scoped>
div {
  /*  给父级添加flex属性 */
  display: flex;

  // 默认的主轴是 X轴 row，从左到右。
  // 设置为 flex-direction:column; 则主轴是Y轴，从上到下。
  flex-direction: column; // row、 column

  /* justify-content: 是设置主轴上的子元素的排列方式; */

  // 1, justify-content 默认值: flex-start，从头部开始对齐。
  //    如果x轴是主轴，既：左对齐。
  //    justify-content: flex-start;

  // 2, 从尾部开始对齐。如x轴是主轴，既：右对齐。
  //     注意：与flex-direction:row-reverse有区别:
  //      (1), row-reverse 会把子元素反转，再尾部对齐；
  //      (2), justify-content:flex-end; 不会反转子元素，只会尾部对齐；
  // justify-content: flex-end;

  // 3, 从主轴居中对齐。如果主轴是X轴，则水平居中
  // justify-content: center;

  // 4, 平分剩余空间。每个元素之间的间隔相等
  // justify-content: space-around;

  // 5, 两端对齐。子元素先两边贴边，然后再平分剩余空间
  // justify-content: space-between;

  width: 800px;
  height: 600px;
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
</style>
