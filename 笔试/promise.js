/**
 * 理解promise的执行顺序
 * 
 * 构造函数和主函数内的console属于宏任务，会先执行，resolve属于微任务，在宏任务执行完后再执行。
 * resolve将promise的状态改变后，then才会执行。
 */
var promise = new Promise(function(resolve, reject) {
    console.log('before resolved');
    resolve('resolved');
    console.log('after resolved');
});
  
promise.then(function(value) {
    console.log(value);
});
  
console.log('outer');

// before resolved
// after resolved
// outer
// resolved


/**
 * promise的异常捕获
 * 
 * promise的错误捕获有两种方式：
 * 1. reject('error msg')
 * 2. throw new Error('error msg')
 * 这两种方法都会走到 catch 的逻辑中
 */
var promise = new Promise((resovle, reject) => {
    reject(new Error('test')); // 等同于 throw new Error('test');
}).catch(function (error) {
    console.log(error);
});// output: Error: test


/**
 * promise的异常捕获
 * promise状态一旦改变就会凝固，不会再改变。因此promise一旦fulfilled了，再抛错，也不会变为rejected，就不会被catch了。
 */
var promise = new Promise(function(resolve, reject) {
    resolve();
    throw 'error';
}).catch(function(e) {
    console.log(e); //状态凝固，不会被catch住
});


/**
 * promise的异常捕获
 * catch - then
 * catch 后也会返回一个 resolved 状态 的 promise实例
 */
var promise = new Promise(resolve => {
    console.log("here we go");
    setTimeout(() => {
        resolve();
    }, 1000);
}).then(() => {
    console.log("start");
    throw new Error("test error");
}).catch(err => {
    console.log("I catch", err); // catch 后也会返回一个 resolved 状态 的 promise实例
}).then(() => {
    console.log("arrive here");
}).then(() => {
    console.log("and here");
}).catch(err => {
    console.log("Now catch", err);
});
// here we go
// start
// I catch: Error: test error
// arrive here
// and here

/**
 * promise的异常捕获
 * catch - then
 * 如果在 catch 中直接抛出 一个 Error，则会掠过后面的then，直接到达下一个 catch
 */
var promise = new Promise(resolve => {
    console.log("here we go");
    setTimeout(() => {
        resolve();
    }, 1000);
}).then(() => {
    console.log("start");
    throw new Error("test error");
}).catch(err => {
    console.log("I catch", err);
    throw new Error("another error"); //抛出错误使promise变为rejected状态
}).then(() => {
    console.log("arrive here");
}).then(() => {
    console.log("and here");
}).catch(err => {
    console.log("Now catch", err);
});
// here we go
// start
// I catch: Error: test error
// Now catch: Error: another error