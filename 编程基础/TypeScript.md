#### TypeScript的优点
- 静态类型检查，ide提示友好，文档
- 在编译时提过错误检查功能
- 有助于代码结构

#### 缺点
- 需要编译成js
- 有学习成本

#### 内置类型/原始数据类型
Number/String/Boolean/Null/Void/Undefined

#### interface 和 type 的区别
- interface只能定义对象类型，而type声明可以声明任何类型，包括基础类型、联合类型或交叉类型。
    ```javascript 
        // 基本类型
        type person = string

        // 联合类型
        interface dog {
            name: string;
        } 
        interface cat {
            name: string;
        } 
        type animal = Dog | Cat

        // 元祖
        type animal = [Dog,Cat]
    ```
- 接口可以extends、implements,从而扩展多个接口或类。类型可以通过合并来扩展。
    ```javascript 
        // 接口extends接口
        interface Person {
            name: string
        }
        interface User extends Person {
            age: number
        }

        // 接口extends类型
        type Person = {
            name: string
        }
        interface User extends Person {
            age: number
        }

        // type合并type
        type Person = {
            name: string
        }
        type User = Person & { age: number }

        // type合并接口
        interface Person {
            name: string
        }
        type User = {age: number} & Person
    ```
- 定义两个相同名称的接口会合并声明，定义两个同名的type会出现异常。
- type可以使用typeof获取实例类型
    ```javascript 
    let div = document.createElement('div');
    type B = typeof div;
    ```

#### any 和 unknow
TypeScript 3.0中引入的 unknown 类型也被认为是 top type ，但它更安全。与 any 一样，它迫使我们执行额外的类型检查来对变量执行操作。

#### 命名空间
可以看作是一种组织代码的手段，防止与其他对象产生命名冲突。因此我们会把一些interface或validators包裹到一个命名空间内，而不是放到全局命名空间下。使用时我们用`<reference path="Validation.ts" />`引入。
```javascript 
    // Validation.ts
    namespace Validation {
        export interface StringValidator {
            isAcceptable(s: string): boolean;
        }
    }
    // Test.ts
    /// <reference path="Validation.ts" />
    let validators: { [s: string]: Validation.StringValidator; } = {};
}
```

#### 外部命名空间
当一个外部库通过`<script>`标签加载，为了让TypeScript编译器识别它的类型，我们使用外部命名空间声明。比如：
```javascript 
declare namespace D3 {
    export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        };
    }

    export interface Event {
        x: number;
        y: number;
    }

    export interface Base extends Selectors {
        event: Event;
    }
}
declare var d3: D3.Base;
```
#### 大小写的区别
`string`表示字符串类型，`String`表示字符串对象，有构造函数，`var name = new String()`。

#### 内部模块和外部模块
- 内部模块就是现在的「命名空间」，用于将类、接口、函数和变量逻辑地分组到一个单元中，并可以导出到另一个模块中。
- 外部模块就是现在所说的「模块」，用于隐藏模块定义的内部语句，并且只显示与声明的变量相关的方法和参数。
- 模块是自声明的；两个模块之间的关系是通过在文件级别上使用imports和exports建立的。

#### 泛型
创建API的时候，不仅要支持当前的数据类型，也应该能支持未来的数据类。我们可以用一个变量「T」来表示类型，这个变量「T」就是泛型。举个🌰：
```javascript 
// 定义
function identity<T>(arg: T): T {
    return arg;
}
//引用
let output = identity<string>("myString");  // type of output will be 'string'
```

#### 泛型约束
```javascript
// before
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

//after
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
```

#### 混合 Mixins
一种重用组件创建类的方式，先定义两个类，每个类只定义了一个特定的行为或功能。然后结合这两个类来创建一个新类，同时具有两种功能。

```javascript
// 结合两个mixins(Disposable,Activatable)，创建一个新类
class SmartObject implements Disposable, Activatable 
```
> 此处没使用extends而是使用implements。把类当成了接口，仅使用Disposable和Activatable的类型而非其实现。这意味着我们需要在类里面实现接口。

#### 类型断言
类似于其他语言中的类型转换，仅由编译器使用。
```javascript
let empCode: any = 111;     
let employeeCode = <number> empCode;     
console.log(typeof(employeeCode)); // : number  
```
`as`是TypeScript中类型断言的附加语法，引入as-语法的原因是原始语法(<type>)与JSX冲突。当使用带有JSX的TypeScript时，只允许as风格的断言
```javascript
let empCode: any = 111;     
let employeeCode = empCode as number;   
```

#### readonly vs const
最简单判断该用`readonly`还是`const`的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用`const`，若做为属性则使用`readonly`。

#### 三斜线指令
三斜线指令是包含单个XML标签的单行注释，注释的内容会做为编译器指令使用。

```/// <reference types="node" /> 表明这个文件使用了 @types/node/index.d.ts里面声明的名字```

三斜线指令仅可放在包含它的文件的最顶端。

#### 如何编译ts文件？
```$ tsc helloworld.ts```

