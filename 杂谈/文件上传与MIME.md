### 前言
最近写了一个音频上传组件，组件的功能很简单，就是上传前检查文件类型，是音频文件就可以正常上传，不是就不传。

相关代码：
```javascript
if (!['audio/mp3', 'audio/ogg',  'audio/wav'].includes(info.file.type)) {
    message.error('上传资源格式不对(音频:mp3/ogg/wav)');
    return;
}
```

当时在本地测了之后没有什么问题，但是在组里测试的电脑上，正常上传mp3文件被阻拦了，这是为什么呢?  

<br>

原来，对上传文件的文件类型并不等于后缀名，而是取决于文件的MIME类型。

MDN 整理了一份[常见MIME类型列表](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)，其中写道，mp3格式的文件，它的MIME应该为`audio/mpeg`。

<br>

值得一提的是，在早年的 win-chrome (win，版本 78.0.3904.70)中，上传mp3格式的文件，代码获取到的MIME类型为`audio/mp3` ；升级了chrome之后(win，版本 92.0.4515.159)，再次上传同一个mp3文件，其MIME才为`audio/mpeg`。

追根究底，这个类型是怎么来的呢？ 

            





