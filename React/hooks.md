# React Hook

### 前言
React在 `v16.8.0` 版本后加入了 Hook，在写法上有了很大的改变。在[React官方文档](https://zh-hans.reactjs.org/docs/hooks-intro.html)中这样介绍了Hook出现的动机：

「在组件之间复用状态逻辑很难」

在我们实际写代码的过程中，一般都用`props`来传递状态，而这需要仔细组织组建结构。而`Hook`可以帮助我们在无需修改组件结构的情况下复用状态逻辑。


「复杂组件变得难以理解」


「难以理解的 class」

具体表现在，class 中 this 的指向问题难以理解，class 的编译出来代码量更大，热加载不稳定等等问题。

出于以上原因，React 拥抱了 Hook，拥抱了函数。

### Hook使用规则
- 只在最顶层使用 Hook
  
  不可以在循环、条件或嵌套函数中调用 Hook。
  
  Hook 依靠调用顺序维持 state 和 useState 的映射关系。Hook 的调用顺序在多次渲染中都应该是相同的。如果破坏此规则，会导致 hook 执行顺序出错，从而逻辑状态出错，导致意想不到的 bug 。

- 只在 React 函数中调用 Hook
  
  只能在 React 的函数组件中 或者 自定义 Hook 中调用 Hook，不要在其他 JavaScript 函数中调用。

为了避免无意中发生上述状况，可以将插件 `eslint-plugin-react-hooks ` 添加到项目中。

### useState
以前我们写函数组件是无状态的组件，所以也叫「无状态组件」。
```javascript
const Example = (props) => {
    return <div />;
}
```
有了 Hook 之后，我们可以在函数组件中“钩入” React 的特性。
```javascript
import React, { useState } from 'react';

const Example = (props) => {
    // 声明一个叫 “count” 的 state 变量
    const [count, setCount] = React.useState(0);

    return <div>{count}</div>;
}
```
    为什么是「方括号」？
    这是一种数组解构的方式，useState 返回一个有两个值的数组，一个是`count`的值，一个是`setCount`。

### useEffect


### 参考文档
1. [Hook简介](https://zh-hans.reactjs.org/docs/hooks-intro.html)