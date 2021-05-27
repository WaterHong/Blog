## ModuleFederation
webpack5的新功能，微前端的一种实现方法
分为 host 项目和 remote 项目，通过配置让他们变成一个完整的SPA

#### 主要有四种主要的插件
- OverridablesPlugin: 定义一个模块，允许被覆盖
- ContainerPlugin:
- ContainerReferencePlugin:
- ModuleFederationPlugin: 结合了以上三者，也是最常用的联邦模块插件

#### Concept goals
- 被覆盖的模块是一个单向操作
- 同级的containers不能覆盖彼此的模块
  

#### 案例
- 单独构建每一页：将每一页都设为remote page，每页单独部署
- 将组件库作为一个container，每个组件都设为 exposed
- Dynamic Remote Containers: 

#### example
参见example文件夹中的例子，重点在于ModuleFederationPlugin的配置，运行后观察js文件的加载效果。

