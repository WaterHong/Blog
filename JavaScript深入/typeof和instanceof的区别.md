### typeof 和 instanceof 的区别

#### typeof 
可用于检测一个变量是某种<strong>基本数据类型</strong>，但无法判断的很具体。

语法 
> typeof operand
> 
> typeof(operand)

返回值

`typeof`可能的返回值有： "undefined" | "object " |"boolean" | "number" | "bugint" | "string " |"symbol" | "function"

示例
```javascript
// number
typeof 42 === 'number'
typeof(42) === 'number'
typeof NaN === 'number';
typeof 42n === 'bigint';

// string
typeof 'haha' === 'string';
typeof (typeof 1) === 'string'; // typeof 总是返回一个字符串

// boolean
typeof true === 'boolean';
typeof Boolean(1) === 'boolean'; 
typeof !!(1) === 'boolean';  // 两次调用 ! (逻辑非) 操作符相当于 Boolean()

// Symbols
typeof Symbol() === 'symbol';

// undefined
typeof undefined === 'undefined';
typeof suibianluandade === 'undefined';

// object
typeof {a: 1} === 'object';
typeof [1, 2, 3] === 'object'; // 使用 Array.isArray 或者 Object.prototype.toString.call 区分数组和普通对象
typeof /regex/ === 'object';

// 下面的例子令人迷惑，非常危险，没有用处。避免使用它们。
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

typeof null === 'object'; //天生如此

// funtion
typeof function() {} === 'function';
typeof class C {} === 'function'; // 类最后会被编译为function
typeof Math.sin === 'function';

```

#### instanceof
用来检测 constructor.prototype 是否存在于参数 object 的原型链上，简单说就是 object 是否由该 constructor 「New」出来的。

语法 
> object instanceof constructor

示例
```javascript
// 定义构造函数
function Animal(){}
function Fruit(){}

var dog = new Animal();

dog instanceof Animal; // true，因为Object.getPrototypeOf(dog) === Animal.prototype
dog instanceof Fruit; // false

dog instanceof Object; // true，Object.prototype.isPrototypeOf(dog) === true
Animal.prototype instanceof Object; // true，同上

// 用 String 和 Date 对象也属于 object 类型（是 Object 类派生出来的）
var simpleStr = "This is a simple string";
var myStr = new String("String created with constructor");
var myDate = new Date();

simpleStr instanceof String; // false, 非对象实例，因此返回 false
myStr instanceof String; // true
myStr  instanceof Object; // true

myDate instanceof Date;     // true
myDate instanceof Object;   // true
```


#### 其他相关

#### Object.prototype.toString.call
```javascript
Object.prototype.toString.call('123'); // [object String]
Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call({}); // [object Object]
Object.prototype.toString.call(/123/); // [object RegExp]
Object.prototype.toString.call(123); // [object Number]
Object.prototype.toString.call(new Date()); // [object Date]
```

 更多冷知识详见 [MDN: typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)