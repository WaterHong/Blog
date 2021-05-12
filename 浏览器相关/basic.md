从浏览器输入URL到页面展示的过程
[网址输入 -> DNS域名解析 -> TCP连接(3次握手) -> 发送http请求 -> 服务器处理请求并返回报文 -> 浏览器解析渲染页面 -> 断开TCP连接(4次挥手)](https://juejin.cn/post/6844903784229896199)

浏览器缓存
[协商缓存、强缓存](https://www.kancloud.cn/freya001/interview/1749874)

浏览器解析渲染页面
[解析HTML，构建DOM树 -> 解析CSS，生成CSS规则树 -> 合并DOM树和CSS规则，生成render树「回流」 -> 计算尺寸、位置，布局render树 -> 绘制render树「重绘」](https://juejin.cn/post/6844903784229896199)

BOM(浏览器对象模型 Browser Object Model)?
JavaScript基础分为三个部分：
ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。
DOM：文档对象模型，操作网页上的元素的API。比如让盒子移动、变色、轮播图等。
BOM：浏览器对象模型，操作浏览器部分功能的API。比如让浏览器自动滚动。
[参考](https://www.cnblogs.com/liuafan/p/9523916.html)

HTTP/1、HTTP/2、HTTP/3
[HTTP/2的头部压缩机制、首部表，多路复用的重组，HTTP/2的丢包情况，HTTP/3基于QUIC](https://blog.csdn.net/howgod/article/details/102597450)
HTTP2缺点，以来TCP，在丢包情况下表现不佳

HTTPS
内容加密、数字证书,TLS,
[参考](https://blog.csdn.net/user11223344abc/article/details/83658812)
[加密的改良](https://www.cnblogs.com/sxiszero/p/11133747.html)

进程和线程
[浏览器的进程和线程，线程之间共享进程中的数据，每一个标签页都是一个进程（通过chrome任务管理器观察而得）](https://blog.poetries.top/browser-working-principle/guide/part1/lesson01.html#%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B)


如何实现多个标签页之间的通信？
websocket、localstorage、webwoker