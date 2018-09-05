[toc]

## 环境配置

<img class="auto-img" src="../../assets/start/env.png" alt="环境配置">

### node.js 配置

1. 安装[node.js](https://nodejs.org/dist/v8.9.3/node-v8.9.3-x64.msi)，安装完成后打开`cmd`，输入`npm -v`，正确显示 npm 版本。

2. 配置`npm`远程仓库地址，并全局安装`cnpm`。

   ```bash
   npm set registry http://192.168.1.117:7001
   npm i -g cnpm
   ```

### chrome 配置

1. 安装 `vue-devtools`（vue 官方组件调试插件） 自行搜索安装。 chrome 商店需要翻墙

2. 安装 `cross-request`（yapi 浏览器发送请求需要） 下载地址：[点我](http://192.168.1.117:3000/attachment/cross-request.zip)

### Vs code 配置

* **插件安装 ( 必须 )**: `EditorConfig for VS Code`, `ESLint`, `Prettier`, `Git Lens`, `Vue 2 Snippets`
* **插件安装 ( 可选 )**: `npm Intellisense`, `Path Intellisense`, `Auto Rename Tag`, `vscode-icons`, `JavaScript standardjs styled snippets`
* **全局配置** `快捷键( ctrl + , )`:

  ```json
  "editor.tabSize": 2,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.autoFixOnSave": true,
  "eslint.run": "onSave",
  "javascript.format.enable": false,
  "prettier.printWidth": 100,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5",
  "prettier.eslintIntegration": true,
  "vueStyle.formatOnSave": true,
  "editor.formatOnSave": true,
  "files.autoSave": "onWindowChange",
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html"
  }
  ```

### git 配置

1. 安装[git](https://github-production-release-asset-2e65be.s3.amazonaws.com/23216272/fd64fd6e-d572-11e7-8ba0-b3657d409994?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20180102%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20180102T140329Z&X-Amz-Expires=300&X-Amz-Signature=989b621496bb289bdb2d13b5c358f47029903400ec735dd8c6f5082e8b70fd09&X-Amz-SignedHeaders=host&actor_id=3207014&response-content-disposition=attachment%3B%20filename%3DGit-2.15.1.2-64-bit.exe&response-content-type=application%2Foctet-stream)，安装完成后打开`cmd`，输入`git -v`，正确显示 git 版本。

2. 生成个人 ssh 密钥

   打开`git bash`，键入`ssh-keygen -t rsa -C "填写公司邮箱" -b 4096`，一路回车，直到密钥创建完成。

### gitlab 配置

1. 访问[gitlab](http://192.168.1.117:8081)，使用**姓名拼音**注册，邮箱填写**公司邮箱**。

2. 在`gitlab`中录入 ssh 公钥(已有的，跳过看下一步)

   在`git bash`中键入`cat ~/.ssh/id_rsa.pub`，复制打印出来的文本，粘贴到`gitlab` ssh 配置页。

3. 配置`git`访问端口

   在`git bash`中键入`vim ~/.ssh/config`，按`i`进入编辑模式，敲入以下文本，按`Esc`推出编辑模式，并键入`:wq`推出并保存。

   ```bash
    Host 192.168.1.117
    Port 8022
    IdentityFile ~/.ssh/id_rsa
   ```

4. 验证是否成功访问

   ```bash
   ssh git@192.168.1.117
   ```

5. 新建项目(可选通过群组管理项目)，并按照创建完成页面设置

   ```bash
   git config --global user.name xxx
   git config --global user.email xxx@kingtopware.com
   ```
