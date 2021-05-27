#### 概况
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。前端最流行的 ajax 请求库。

#### 特点
基于promise，支持客户端/服务端，支持请求/响应拦截器，支持取消请求，支持批量请求，安全性高，天然支持客户端支持防御 XSRF。

#### axios 调用流程
实际调用的`Axios.prototype.request`方法，最终返回的是 promise 链式调用。

#### axios拦截器及其原理
分为请求拦截器和响应拦截器，常用于上报接口数据。[原理详见](https://www.jianshu.com/p/5965308b6348)

#### 为什么axios既可以运行在Node中，又可以运行在客户端？
在`axios`的`defalt.js`有一个`getDefaultAdapter`方法，顾名思义就是获取适配器，根据`XMLHttpRequest`和`process`判断当前运行环境。如果是在浏览器中则使用 `XMLHttpRequest`对象发送ajax请求,若是在node环境使用`http`对象发送请求。
```javascript
var defaults.adapter = getDefaultAdapter();
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = require('./adapters/xhr');
    } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
        // For node use HTTP adapter
        adapter = require('./adapters/http');
    }
    return adapter;
}
```

#### axios与AJAX、fetch的区别
- axios：底层还是基于XMLHttpRequest对象的，基于promise，支持客户端/服务端，支持请求/响应拦截器，支持取消请求，支持批量请求，安全性高，天然支持客户端支持防御 XSRF。
- ajax：也是基于XMLHTTPRequest对象，是早期实现无刷新数据请求的方法，只能用在浏览器中。
- fetch：基于原生的js，不依赖浏览器，fetch返回的是promise，所以即使HTTP状态码是404之类的，fetch也是成功返回的，只有在网络连接错误的情况下，才会reject。fetch不发送cookies