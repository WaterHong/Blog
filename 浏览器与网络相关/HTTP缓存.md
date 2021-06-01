#### 浏览器缓存
Expires：response header里的过期时间，浏览器再次加载资源时，如果在这个过期时间内，则命中强缓存。

cache-control：no-cache/no-store/public/private

Last-Modify/If-Modify-Since

Etag/If-None-Match/max-age：响应时返回的Etag是当前资源在服务器的唯一标识，当资源过期时（max-age），再请求时request会带上If-None-Match（即etag的值）交由服务器比对，决定是否命中缓存。

优先级：Etag > Last-Modify
[协商缓存、强缓存](https://www.kancloud.cn/freya001/interview/1749874)

#### Pragma 和 Cache-Control
Pragma是旧产物，已经逐步抛弃，优先级从高到低是 Pragma -> Cache-Control -> Expires