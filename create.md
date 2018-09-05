[toc]

## 项目创建

<img class="auto-img" src="../../assets/start/create.png" alt="项目创建">

1. 全局安装项目模版生成器:

   ```bash
   // 必须通过npm安装私有包！！！
   npm install -g @ktw/ktw-cli

   // 查看当前可用项目/库模版
   ktw list
   ```

2. 选择项目模版，初始化项目，根据提示完成项目初始化。

   ```bash
   // 在你需要放置项目代码的文件夹内运行该命令
   ktw init kproject demo
   ```

3. 运行项目开发服务器

   ```bash
   npm run dev
   ```

### 项目目录结构

* build —————————— **webpack 打包相关配置文件**
* config —————————— **环境变量配置文件 可在代码中通过 `process.env.NODE_ENV` 来判断**
* dist —————————— **运行 `npm run build` 命令后打包的生产构建版本**
  * docs —————————— **项目文档目录**
  * static —————————— **打包生成的静态文件目录**
* docs —————————— **项目开发文档目录**
  * assets —————————— **用来放置开发文档中引用的相关资源文件**
  * zh-cn —————————— **用来放置开发文档**
* node_modules —————————— **`npm install` 安装的项目依赖**
* src —————————— **项目源代码文件夹**
  * assets —————————— **项目引用的资源文件**
    * icon —————————— **放置系统中使用到的 svg 图标**
  * components —————————— **项目公共组件**
  * config —————————— **项目配置文件**
    * k-config-api —————————— **api 请求配置**
    * k-config-sentry —————————— **sentry 监控服务配置**
  * directive —————————— **vue 指令**
  * filters —————————— **vue 过滤器**
  * router —————————— **vue-router**
  * store —————————— **vuex**
    * modules —————————— **vuex modules**
  * styles —————————— **全局样式文件**
    * kcore —————————— **基础组件库样式变量**
    * reset —————————— **全局重置样式**
    * transition —————————— **全局过渡定义**
  * utils —————————— **工具函数**
    * help —————————— **业务开发中需要的全局帮助函数**
  * view —————————— **放置业务组件**
    * dashboard —————————— **首页**
    * user —————————— **用户相关**
  * App.vue —————————— **入口组件**
  * main.js —————————— **入口 js**
* static —————————— **静态资源文件夹**
  * sdk —————————— **放置第三方 sdk**
* test —————————— **放置测试代码文件夹**
* .babelrc —————————— **babel-loader 加载的配置文件**
* .editorconfig —————————— **统一编辑器格式配置文件**
* .eslintrc.js —————————— **eslint 代码校验配置文件**
* .postcssrc.js —————————— **postcss 配置文件**
* .prettierrc.js —————————— **prettier 配置文件**
* favicon.ico —————————— **favicon**
* index.html —————————— **html 模版文件**
* package.json —————————— **npm 生成的包管理文件**
* README.md —————————— **常用命令说明**

### 常用命令

::: warn
必须使用 npm 安装依赖，请确保 npm 已指向私有仓库地址, 详情见 [私有仓库](http://192.168.1.117:7002)。
:::

```bash
# 安装项目依赖
npm install

# 开发模式（热重载） 浏览器键入 http://localhost:8080
npm run dev

# 自动fix代码格式问题
npm run lint

# 生产版本构建(minify)
npm run build

# 生产版本构建(查看打包构建bundle组成报告)
npm run build --report

# 查看生产构建后的版本
npm run web

# 查看项目文档
npm run docs

# 发布新版本，并根据提交记录自动生成changlong.md
npm run release

# 运行单元测试
npm run unit

# 运行端到端测试
npm run e2e

# 运行所有测试
npm test
```
