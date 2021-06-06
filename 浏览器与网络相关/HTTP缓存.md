#### 浏览器缓存
Expires：response header里的过期时间，浏览器再次加载资源时，如果在这个过期时间内，则命中强缓存。

cache-control：no-cache/no-store/public/private

Last-Modify/If-Modify-Since

Etag/If-None-Match/max-age：响应时返回的Etag是当前资源在服务器的唯一标识，当资源过期时（max-age），再请求时request会带上If-None-Match（即etag的值）交由服务器比对，决定是否命中缓存。

优先级：Etag > Last-Modify
[协商缓存、强缓存](https://www.kancloud.cn/freya001/interview/1749874)

#### Pragma 和 Cache-Control
Pragma是旧产物，已经逐步抛弃，优先级从高到低是 Pragma -> Cache-Control -> Expires

#### from memory cache 和 from disk cache
- from memory cache

  字面理解是从内存中，当关闭该页面时，此资源就被内存释放掉了，再次重新打开相同页面时不会出现from memory cache的情况。

- from disk cache

  同上类似，此资源是从磁盘当中取出的，但是此资源不会随着该页面的关闭而释放掉，因为是存在硬盘当中的，下次打开仍会from disk cache。

//FIXME
https://blog.csdn.net/FengNext/article/details/100172186