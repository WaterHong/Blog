### Promise
ES6 规定，Promise对象是一个构造函数，用来生成Promise实例。 

```javascript
new Promise(
  function (resolve, reject) {
    // 一段耗时的异步操作
    resolve('成功') // 数据处理完成
    // reject('失败') // 数据处理出错
  }
).then(
  (res) => {console.log(res)},  // 成功
  (err) => {console.log(err)} // 失败
)
```

#### 详解
- promise 的三种状态：
  
  1. pending
  2. fulfilled
  3. rejected
   
    当promise状态发生改变时，就会触发 then 里面的响应函数处理后续步骤。

- promise 的状态改变只有两种可能
  
  1. pending -> fulfilled
  2. pending -> rejected
   
- resolve 的作用是，将 promise 对象的状态从 pending 变为 fulfilled，在异步操作成功时回调，并将结果作为参数传递出去。
  
  rejected 的作用则是将状态从 pending 变为 rejected，其他的同 resolve。

#### promise 的一些弊端
- 一旦新建，无法中途取消
- 当处于pending状态时，无法得知目前进展到哪一个阶段

#### 示例
见[笔试-promise.js]

#### Promise.all
多个 Promise 同时开始，并行执行。

```javascript
var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 3000, "first");
});
var p2 = new Promise(function(resolve, reject) {
    resolve("second");
});
var p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, "third");
});

Promise.all([p1, p2, p3]).then(function(values) {
  console.log(values);
});

// 约3秒后 ["first", "second", "third"]
```
当p1, p2, p3状态都变为fulfilled，p的状态才会变为fulfilled，并将三个promise返回的结果，按参数的顺序（而不是 resolved的顺序）存入数组，传给p的回调函数。

#### Promise.race
竞速执行。
```javascript
var p1 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 500, "one"); 
});
var p2 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, "two"); 
});

Promise.race([p1, p2]).then(function(value) {
    console.log('resolve', value); 
}, function(error) {
    //not called
    console.log('reject', error); 
});

// resolve two
```

当p1, p2, p3中有一个实例的状态发生改变（变为fulfilled或rejected），p的状态就跟着改变。并把第一个改变状态的promise的返回值，传给p的回调函数。

#### Promise 链式调用的原理
Promise 的链式调用是指在当前 promise 到达`Fulfilled`状态后，即开始进行下一个 promise。
（需要手写一个promise才更好理解）


#### 扩展：Jquery中的链式调用
我们常在 Jquery 看到这种链式调用写法：
```javascript
aQuery().init().name();
// 等同于
a = aQuery();
a.init()
a.name()
```
同promise相似，如果我们需要链式调用，只需要在方法内部方法当前的这个实例对象this就可以了，因为返回当前实例的this，从而又可以访问自己的原型了。

```javascript
aQuery.prototype = {
    init: function() {
        return this;
    },
    name: function() {
        return this
    }
}
```

弊端：所有对象的方法返回的都是对象本身，也就是说没有返回值。


