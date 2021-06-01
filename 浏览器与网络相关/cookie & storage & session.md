#### Session ID与cookie
[cookie和session都是用来跟踪浏览器用户身份的会话方式，cookie数据保存在客户端，session数据保存在服务端。](https://blog.csdn.net/chen13333336677/article/details/100939030)

#### cookie、localStorage、sessionStorage
| 特性 |  cookie   | localStorage  | sessionStorage  |
|  ----  | ----  | ----  | ----  |
| 存放数据大小  | 4Kb | 5M | 5M |
| 生命期  | 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效 | 除非被清除，否则永久保存 | 仅在当前会话下有效，关闭页面或浏览器后被清除 |
| 与服务器端通信 | 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题 | 不参与和服务器的通信 | 不参与和服务器的通信 |
