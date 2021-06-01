#### New的时候做了什么？
```javascript
function myNew(func) {
    // 1. 创建一个空对象
    let target = {};

    // 2.将该对象继承函数的原型
    target.__proto___ = func.prototype;

    // 3.属性和方法被加入到 this 引用的对象中，并执行了该函数func
    let res = func.call(target);

    // 4.隐式的返回这个对象
    if( typeof res == "object" || typeof res == "function"){
        return res;
    }
    return target;
}
```
  
  
