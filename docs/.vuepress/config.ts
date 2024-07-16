import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { blogPlugin } from "@vuepress/plugin-blog";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  lang: "zh-CN",
  title: "天使的日曜日",
  description: "天使的日曜日-雨宫优子文档",
  plugins: [
    blogPlugin({
      // 选项
    }),
  ],
});
