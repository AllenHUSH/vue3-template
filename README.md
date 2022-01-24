# Vue 3 模版项目

本仓库为模版仓库，使用的主要依赖有（带 * 表示该依赖可选）：

+ Vite
+ Vue 3
+ TypeScript
+ VueRouter *
+ Vuex *
+ WindiCSS *

## 删除可选依赖

+ VueRouter
  1. 删除 src/router 文件夹
  2. 删除 src/main.ts 中的引用与使用
  3. 删除 src/App.ts 中的引用与使用
  4. 执行 `yarn remove vue-router`
+ Vuex
  1. 删除 src/store 文件夹
  2. 删除 src/main.ts 中的引用与使用
  3. 执行 `yarn remove vuex`
+ WindiCSS
  1. 删除 windi.config.ts 文件
  2. 删除 vite.config.ts 中的引用与使用
  3. 执行 `yarn remove vite-plugin-windicss windicss`

## 升级依赖包版本

```bash
// 使用 yarn
yarn upgrade-interactive --latest

// 使用 npm-check
npm-check -u
```

## 清除 git 记录

```bash
rm -rf .git
```

