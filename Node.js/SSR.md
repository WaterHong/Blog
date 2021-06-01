#### 什么是SSR？
服务端渲染，即服务端把数据和模板拼接好后发送给客户端显示。

#### SSR最显著的优点
不利于SEO和首屏渲染慢

#### SPA爬虫优化
1、用php开发简单的包含seo内容的页面，通过nginx判断请求头是否为爬虫，是的话则指向seo的页面，否则指向spa页面。
> nginx如何判断是否为爬虫？
> 一般搜索引擎的爬虫会在ua中显示，如 Baiduspider|Googlebot|qihoobot等。

2、Puppeteer搭建的node服务，通过nginx判断请求头是否为爬虫，是则指向通过puppeteer拉取html并返回html的地址，否则指向正常页面。
