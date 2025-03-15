<script lang="ts" setup></script>

<template>
  <view class="content">
    <section>
      <div>1 </div>
      <div>2 (flex: 1)</div>
      <div>3</div>
    </section>

    <p>
      <span>4 (flex: 1)</span>
      <span>5 (flex: 2)</span>
      <span>6 (flex: 1)</span>
    </p>
  </view>
</template>

<style lang="less" scoped>
section {
  /*  给父级添加flex属性 */
  display: flex;

  width: 60%;
  height: 150px;
  background-color: pink;
  margin: 0 auto;
}

section div:nth-child(1) {
  width: 100px;
  height: 150px;
  background-color: red;
}

section div:nth-child(2) {
  // flex属性定义子项目分配剩余空间，用 flex 来表示占多少份数。
  // 这里的flex: 1; 表示：整个剩余空间作为1份全部给我
  flex: 1;
  background-color: green;
}

section div:nth-child(3) {
  width: 100px;
  height: 150px;
  background-color: yellow;
}

p {
  /*  给父级添加flex属性 */
  display: flex;

  width: 60%;
  height: 150px;
  background-color: pink;
  margin: 100px auto;
}

p span {
  // 每个span均分p的宽度，p里面有3个span，所以每个span 宽度是 p宽度的1/3。
  flex: 1;
}

p span:nth-child(2) {
  // 这里的flex: 2; 表示：第2个span，占2份数。
  // 加上span1和span3，一共分成了4份，第2个span的宽度占了2份宽度，既宽度的 1/2。
  flex: 2;
  background-color: purple;
}
</style>
