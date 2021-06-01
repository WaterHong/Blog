#### 有没有自己写过cli，有什么用途，是如何实现的？
搭建项目，生成页面，选择开发环境
用`yeoman`做一个脚手架，`generator-generator`制作一个脚手架，`prompting`用来与用户完成交互，模板文件是生成项目的一个原材料。

yeoman 的生命周期：
- initializing - 初始化函数

- prompting - 接收用户输入阶段

- configuring - 保存配置信息和文件

- default - 自定义功能函数名称，如 method1

- writing - 生成项目目录结构阶段

- conflicts - 统一处理冲突，如要生成的文件已经存在是否覆盖等处理

- install - 安装依赖阶段

- end - 生成器结束阶段

#### 项目有ci吗，怎么做，有什么功能？
公司内部的ci，配置yaml文件，加入代码权限，配置git hook，主要是用于代码管理

- 在mr时检查，当前分支是否有rebase，commit msg书写格式，通知cr相关人员，自动合并
- tag push时生成changelog