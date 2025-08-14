<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>

<style>
/* 全局样式 */

.select-container {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  margin-bottom: 10px;
}

.select-view {
  width: 280px;
  margin-right: 15px;
}
</style>
