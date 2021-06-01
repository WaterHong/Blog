#### 背景
Service Worker 是一个离线资源统筹机制，可以使你的应用先访问本地缓存资源，所以在离线状态时，在没有通过网络接收到更多的数据前，仍可以提供基本的功能。这是原生APP 本来就支持的功能。

#### 基本架构
1. service worker URL 通过 serviceWorkerContainer.register() 来获取和注册。
2. 注册成功，可以运行
3. 打开一个页面，此时页面安装sw，并激活
4. done，sw可以控制页面了