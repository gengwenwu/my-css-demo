<!-- 这是flex布局，flex-direction 案例demo -->

<script lang="ts" setup>

// flex-direction 属性值范围
const directionRange = ref([
  { value: "row", text: "row" },
  { value: "row-reverse", text: "row-reverse" },
  { value: "column", text: "column" },
  { value: "column-reverse", text: "column-reverse" },
]);

// 当前选择的flex-direction
const currentDirection = ref(null);

// 监听flex-direction变化
const onDirectionChange = (e) => {
  currentDirection.value = e;
};

</script>

<template>
  <view>
    <uni-section class="select-view">
      <uni-data-select
        label="flex-direction"
        v-model="currentDirection"
        :localdata="directionRange"
        @change="onDirectionChange"
        :clear="false"
      ></uni-data-select>
    </uni-section>
  </view>

  <view class="content">
    <div :style="{ flexDirection: currentDirection }">
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

.select-view {
  width: 280px;
  margin-bottom: 10px;
}
</style>
