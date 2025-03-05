import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      // 自动导入的包
      imports: ["vue", "uni-app"],
    }),
  ],
});
