#### 从浏览器输入URL到页面展示的过程
[网址输入 -> DNS域名解析 -> TCP连接(3次握手) -> 发送http请求 -> 服务器处理请求并返回报文 -> 浏览器解析渲染页面 -> 断开TCP连接(4次挥手)](https://juejin.cn/post/6844903784229896199)

#### 浏览器缓存
Expires：response header里的过期时间，浏览器再次加载资源时，如果在这个过期时间内，则命中强缓存。

cache-control：no-cache/no-store/public/private

Last-Modify/If-Modify-Since

Etag/If-None-Match/max-age：响应时返回的Etag是当前资源在服务器的唯一标识，当资源过期时（max-age），再请求时request会带上If-None-Match（即etag的值）交由服务器比对，决定是否命中缓存。

优先级：Etag > Last-Modify
[协商缓存、强缓存](https://www.kancloud.cn/freya001/interview/1749874)

#### Pragma 和 Cache-Control
Pragma是旧产物，已经逐步抛弃，优先级从高到低是 Pragma -> Cache-Control -> Expires

#### Session ID与cookie
[cookie和session都是用来跟踪浏览器用户身份的会话方式，cookie数据保存在客户端，session数据保存在服务端。](https://blog.csdn.net/chen13333336677/article/details/100939030)

#### cookie、localStorage、sessionStorage
| 特性 |  cookie   | localStorage  | sessionStorage  |
|  ----  | ----  | ----  | ----  |
| 存放数据大小  | 4Kb | 5M | 5M |
| 生命期  | 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效 | 除非被清除，否则永久保存 | 仅在当前会话下有效，关闭页面或浏览器后被清除 |
| 与服务器端通信 | 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题 | 不参与和服务器的通信 | 不参与和服务器的通信 |

#### 浏览器解析渲染页面
[解析HTML，构建DOM树 -> 解析CSS，生成CSS规则树 -> 合并DOM树和CSS规则，生成render树「回流」 -> 计算尺寸、位置，布局render树 -> 绘制render树「重绘」](https://juejin.cn/post/6844903784229896199)

#### BOM(浏览器对象模型 Browser Object Model)?
JavaScript基础分为三个部分：
ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。
DOM：文档对象模型，操作网页上的元素的API。比如让盒子移动、变色、轮播图等。
BOM：浏览器对象模型，操作浏览器部分功能的API。比如让浏览器自动滚动。
[参考](https://www.cnblogs.com/liuafan/p/9523916.html)

#### 进程和线程
[浏览器的进程和线程，线程之间共享进程中的数据，每一个标签页都是一个进程（通过chrome任务管理器观察而得）](https://blog.poetries.top/browser-working-principle/guide/part1/lesson01.html#%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B)


#### 如何实现多个标签页之间的通信？
websocket、localstorage、webwoker