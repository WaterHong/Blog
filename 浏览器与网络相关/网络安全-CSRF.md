### CSRF/XCRF
跨站请求伪造，简单来说就是攻击者盗用了你的身份，用你的身份发起了请求。

#### CSRF能够做的事情
盗用用户的身份信息发送邮件、发消息、购买商品转账等等。

#### 举例
某A网站的用于转账的URL为 http://www.examplebank.com/withdraw?account=AccoutName&amount=1000&for=PayeeName

小红访问了A网站的，登陆信息Cookie尚未过期。

随即小红又访问了恶意网站B网站。

而B网站上有这么一段代码:

`<img src="http://www.examplebank.com/withdraw?account=Alice&amount=1000&for=Badman">`

那么只要小红在访问B网站时，A网站的登陆信息没有过期，那么B网站上这张图片请求就会鞋带上A网站的cookie向A网站发起请求，从而使用户在「非自愿」的情况下发起转账。

<strong>CSRF其实不能并不能窃取用户的信息，但它会欺骗用户浏览器，让其以用户的名义进行操作。</strong>

#### 防御措施
- 检查referer字段
  
  http请求头中的 referer 可以表明请求来源的地址，在访问处加一层校验，判断是否同源，可以阻挡CSRF。
  
  但局限性在于完全依赖 referer 字段，但浏览器无法保证 referer 字段不会被篡改。 
- token
  
  在 HTTP 请求中以参数的形式加入一个随机产生的 token，并在服务器端建立一个拦截器来验证这个 token。如果请求中没有 token 或者 token 内容不正确，则认为可能是 CSRF 攻击而拒绝该请求。

- axios: x-xsrf-token
  
  axios 支持客户端防御XCRF，其原理是在请求头中增加自定义的属性，属性值为后台访问的token。
  
  进一步阅读 axios的[文档](http://www.axios-js.com/zh-cn/docs/)可知，axios 的请求配置中除了常规的参数以外，还有两个跟xsrg有关的参数：一个是`xsrfCookieName`，表示获取 xsrf token 的值的 cookie 的名称；另一个是`xsrfHeaderName`，表示在 http 头部携带 token 的名称。

  这个token一般是由服务端种下的，例如laravel框架在默认情况下会开启 csrf token 验证。token 会在每一次 Session 创建时重新生成。
