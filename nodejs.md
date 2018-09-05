* 编码规范
    * 提高代码质量，减少代码维护成本
    * 制度的效果往往并不明显，项目开发过程中，大家可能不会也没时间去遵守一些细节上的规范
    * 自动化检查和修改工具
* 编码检查
    * JSLint
        * Douglas Crockford,最早的js Lint工具，名字来自于C语言Lint
        * 非Good Parts都报了warning
        * js权威指南 - js语言精粹
    * JSHint
        * Anton Kovalyov基于JSLint的代码实现的开源项目
        * 容易配置
        * 不易扩展
        * 不支持自定义规则
    * ESLint
        * Nicholas C.Zakas 2013
        * 开发者能自定义linting rules
        * 可配置为警告和错误两个等级，可以禁止
* 举例使用
    * jQuery
    * react
    * vue
* 工具使用
    * 环境准备
        * nodejs安装
            * 配置
                * path
                    * D:\WebApp\nodejs
                    * D:\WebApp\nodejs\node_global
                * 新增
                    * NODE_PATH D:\WebApp\nodejs\node_global\node_modules
            * Windows系统下设置Nodejs NPM全局路径
                * 在nodejs的安装目录中找到node_modules\npm\npmrc文件，修改为所选的路径
                    * prefix = D:\WebApp\nodejs\node_global
                    * cache = D:\WebApp\nodejs\node_global_cache
                    * registry = http://registry.npmjs.org 默认的，修改为 https://registry.npm.taobao.org
                * 安装多个源切换
                    * npm install -g nrm
                * 同时在环境变量里面添加
                    * PATH加上 D:\WebApp\nodejs\node_global
                    * 系统变量 添加 NODE_PATH 变量 D:\WebApp\nodejs\node_global\node_modules
        * npm i -g eslint
    * 把 .eslintrc.js放在一个固定的位置
        * // 192.168.1.120/Share/ESlint
    * 当然也可以放在项目中
    * webstorm配置
        * Setting - Languages&Frameworks - JavaScript - Code Quality Tools - ESlint
* 参考
    * 