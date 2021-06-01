/**
 * 实现isArray方法
 * 关键语句：Object.prototype.toString.call()可获取数据类型
 * console.log(Object.prototype.toString.call('123')); // [object String]
 * console.log(Object.prototype.toString.call([])); // [object Array]
 * console.log(Object.prototype.toString.call({})); // [object Object]
 * console.log(Object.prototype.toString.call(/123/)); // [object RegExp]
 * console.log(Object.prototype.toString.call(123)); // [object Number]
 * console.log(Object.prototype.toString.call(new Date())); // [object Date]
 */
Array.myIsArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

// test
console.log(Array.myIsArray([])); // true
console.log(Array.myIsArray({})); // false
console.log(Array.myIsArray(123)); // false
console.log(Array.myIsArray('123')); // false