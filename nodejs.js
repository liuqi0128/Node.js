1.淘宝 NPM 镜像
npm config set registry https://registry.npm.taobao.org

Node模块（包）平台：https://www.npmjs.com/


2.新建一个空项目,并自动生成package.json文件
npm init

3.package.json文件解析

Package.json 属性说明==>
Name	 - 包名。
Version	 - 包的版本号。
Description  - 包的描述。
Author	 - 包的作者姓名。
contributors - 包的其他贡献者姓名。
Dependencies	 -项目应用运行依赖模块。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
devDependencies	 -项目应用开发环境依赖
Repository	 - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
main 	- main 字段是一个模块ID，它是一个指向你程序的主要项目。就是说，如果你包的名字叫 express，然后用户安装它，然后require("express")。
keywords 	- 关键字
licenses	 -授权方式
directories	 -目录

4.使用 npm 命令安装模块
npm install <模块名称> 
简写： npm i <模块名称> 
例如： npm i jquery

5.全局安装与本地安装
npm install express  #本地安装 
npm install express -g #全局安装

本地安装：
 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
可以通过 require() 来引入本地安装的包。
--用来安装项目中所需要的依赖

全局安装：
将安装包放在 /usr/local 下或者你 node 的安装目录。
可以直接在命令行里使用。
--用来安装工具


6.查看安装模块列表

npm  ls   -g      	#查看所有全局安装的模块
npm ls 		#查看本目录模块儿列表 

Npm全局安装的包文件地址：
window=>   C:\Users\Administrator\AppData\Roaming\npm
mac=> /usr/local/lib

7.直接使用 npm i /npm install 安装的模块是不会写入 package.json 
使用npm install 安装模块或插件的时候，有两种命令把他们写入到 package.json 文件里面去，比如：
npm install  <模块名>  --save-dev
npm install  <模块名>  --save
在 package.json 文件里面体现出来的区别：
使用 --save-dev 安装的 插件，被写入到 devDependencies 对象里面去
使用 --save 安装的插件，则被写入到 dependencies 对象里面去。

package.json 文件里面的 devDependencies  和 dependencies 对象区别：
devDependencies  里面的插件只用于开发环境，不用于生产环境，只用于开发阶段完成集成测试等功能模块依赖；
dependencies  是需要发布到生产环境的。只需要使用npm install –production依赖必须的模块即可；

强调：npm  install 命令能够根据package.json重新安装开发环境和生产环境的各个依赖文件
            npm install  --production 只安装发布到生产环境列表里的包


8.运行js文件
在命令行窗口中输入： node index.js









