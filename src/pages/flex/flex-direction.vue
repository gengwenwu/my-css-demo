<script lang="ts" setup>
import { directionRange } from "@/utils/helper.js";

/**
 * 这是flex布局，flex-direction 案例 demo
 **/

// flex-direction 属性值范围
const directionRangeRef = ref(directionRange);
// 当前选择的flex-direction
const currentDirectionRef = ref(null);

// 监听flex-direction变化
const onDirectionChange = (e) => {
  currentDirectionRef.value = e;
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
  </view>

  <view>
    <div :style="{ flexDirection: currentDirectionRef }">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  </view>
</template>

<style lang="less" scoped>
div {
  /*  给父级添加flex属性 */
  display: flex;

  /* flex-direction 属性值 */
  // 注意：主轴、侧轴怎么判定，取决于 flex-direction 的属性值。
  // 1，默认的主轴是X轴(x轴、row轴， 从左到右),。既：元素默认跟着主轴排列，所以 flex-direction: row; 可以省略
  // flex-direction: row;

  // 2，X轴反转，简单了解即可
  // flex-direction: row-reverse;

  // 3, 把主轴设置为Y轴（从上到下），那么X轴就变成了侧轴。
  // flex-direction: column;

  // 4, y轴反转，简单了解即可
  // flex-direction: column-reverse;

  width: 700px;
  height: 450px;
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
