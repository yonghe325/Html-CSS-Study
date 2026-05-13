`eval()` 是一个**可以将字符串作为 JavaScript 代码执行**的函数
它接收一个字符串参数，并将其作为 JavaScript 代码在**当前作用域**中执行。
# 基本用法
```js
// 执行简单表达式
eval('console.log("Hello")');  // 输出: Hello

// 执行变量声明
eval('var x = 10;');
console.log(x);  // 10

// 执行函数定义
eval('function sayHi() { console.log("Hi"); }');
sayHi();  // 输出: Hi

// 返回值
const result = eval('2 + 2');
console.log(result);  // 4

// 执行对象操作
eval('var obj = {name: "张三", age: 25}');
console.log(obj.name);  // 张三
```
# 作用域行为
## 在当前作用域执行
```js
// 全局作用域
var globalVar = 'global';
eval('var test = "eval执行"');
console.log(test);  // "eval执行"（全局变量）

// 函数作用域
function testScope() {
  var localVar = 'local';
  eval('var inner = "内部变量"');
  console.log(inner);  // "内部变量"（函数内的局部变量）
  console.log(localVar);  // "local"
}
testScope();
console.log(typeof inner);  // "undefined"（外部访问不到）
```
## 严格模式下的限制
严格模式下 eval 有独立作用域
```js
'use strict';

eval('var strictVar = "严格模式"');
console.log(typeof strictVar);  // "undefined"（严格模式下 eval 有独立作用域）

// 严格模式下，eval 不污染外部作用域
function strictFunc() {
  'use strict';
  eval('var x = 10');
  console.log(typeof x);  // "undefined"
}
```
# `eval()`的安全问题
==***不要使用`eval()`方法!!!***==