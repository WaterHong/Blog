#### 状态码

成功：2xx（成功200）

重定向：3xx

300 Multiple Choices 被请求的资源有一系列可供选择的回馈信息

301 Moved Permanently 被请求的资源已永久移动到新位置
>注意：对于某些使用 HTTP/1.0 协议的浏览器，当它们发送的 POST 请求得到了一个301响应的话，接下来的重定向请求将会变成 GET 方式。

302 Move Temporarily 临时重定向

303 See Other 对应当前请求的响应可以在另一个 URL 上被找到，而且客户端应当采用 GET 的方式访问那个资源。

304 Not Modified 
>304响应禁止包含消息体，因此始终以消息头后的第一个空行结尾。

305 Use Proxy

306 Switch Proxy

307 Temporary Redirect 请求的资源临时从不同的URI 响应请求。

请求错误：4xx

400 Bad Request 语义有误，请求参数有误。

401 Unauthorized 当前请求需要用户验证

403 Forbidden 服务器已经理解请求，但是拒绝执行它,常用于「无权限访问」

404 Not Found 找不到资源

405 Method Not Allowed 请求行中指定的请求方法不能被用于请求相应的资源

418 I'm a teapot 当客户端给一个茶壶发送泡咖啡的请求时，茶壶就返回一个418错误状态码，表示“我是一个茶壶”。常见于服务端识别到你是个爬虫。

服务器错误：5xx，600

500 Internal Server Error 常见于服务端代码错误

501 Not Implemented 服务器不支持当前请求

502 Bad Gateway 

503 Service Unavailable 服务器当前无法处理请求（服务器维护或过载）

504 Gateway Timeout 超时

505 HTTP Version Not Supported 服务器不支持，或者拒绝支持在请求中使用的 HTTP 版本。

600 Unparseable Response Headers 源站没有返回响应头部，只返回实体内容


[更多状态码参考](https://baike.baidu.com/item/HTTP%E7%8A%B6%E6%80%81%E7%A0%81/5053660?fr=aladdin)

#### 为什么没有1xx状态码？
由于 HTTP/1.0 协议中没有定义任何 1xx 状态码，所以除非在某些试验条件下，服务器禁止向此类客户端发送 1xx 响应。