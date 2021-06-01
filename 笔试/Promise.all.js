/**
 * 实现一个 Promise.All
 * 总结 promise.all 的特点
 * 1、接收一个 Promise 实例的数组或具有 Iterator 接口的对象，
 * 2、如果元素不是 Promise 对象，则使用 Promise.resolve 转成 Promise 对象
 * 3、如果全部成功，状态变为 resolved，返回值将组成一个数组传给回调
 * 4、只要有一个失败，状态就变为 rejected，返回值将直接传递给回调 all() 的返回值也是新的 Promise 对象
 */

var p1 = Promise.resolve(1),
    p2 = Promise.reject(2),
    p3 = Promise.resolve(3);

function Myall(promises) {
    return new Promise(function(resolve,reject){
        if(Array.isArray(promises)){
            return reject(new TypeError('arguments must be an array'))
        }
        let resolvedCounter = 0;
        let promiseNum = promises.length;
        let resolveValue = new Array(promiseNum);
        for (let index = 0; index < promiseNum; index++) {
            (function(index){
                Promise.resolve(promises[i]).then(function(value){
                    resolvedCounter++;
                    resolveValue[index] = value;
                    if (resolvedCounter == promiseNum) {
                        return resolve(resolveValue);
                    }
                },function(reason){
                    return reject(reason);
                })
            })(index)
        }
    })
}

// test
Promise.Myall([p1, p2, p3]).then(function (results) {
    //then方法不会被执行
    console.log(results);
}).catch(function (e){
    //catch方法将会被执行，输出结果为：2
});