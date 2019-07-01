# wepy-seed

> 一个基于wepyjs的小程序种子

## Build Setup
   安装依赖

   npm  install

   开启实时编译

   wepy build --watch
## 开发者工具使用
   使用微信开发者工具导入项目，本地开发选择dist目录。
   
   微信开发者工具-->项目-->关闭ES6转ES5。重要：漏掉此项会运行报错。
   
   微信开发者工具-->项目-->关闭上传代码时样式自动补全 重要：某些情况下漏掉此项会也会运行报错。
   
   微信开发者工具-->项目-->关闭代码压缩上传 重要：开启后，会导致真机computed, props.sync 等等属性失效。
   
   项目根目录运行wepy build --watch，开启实时编译。
