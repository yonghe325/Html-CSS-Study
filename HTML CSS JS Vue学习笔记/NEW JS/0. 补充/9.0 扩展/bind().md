该方法与[[call() 与 apply()|call() 与 apply()方法]]类似
	区别在于 `call()` 与 `apply()` 方法立即执行
	而 `bind()` 方法返回新函数
根据原始函数, 创建一个新函数
并将该函数内部的 `this`/参数 永久指定为 传入的对象/值
```js
const boundFunction = originalFunction.bind(thisArg, arg1, arg2, ...)
//      新函数标识符       指定函数        指定this的值   传入参数...
```
参数也可以永久指定
```js
function multiply(a, b) {
    return a * b;
}
const double = multiply.bind(null, 2);  // 预设第一个参数为 2
console.log(double(5));  // 10（2 × 5）
console.log(double(10)); // 20（2 × 10）

const triple = multiply.bind(null, 3);
console.log(triple(5));  // 15（3 × 5）
```
==不能绑定箭头函数==
==绑定后的新函数不能再被绑定==(不能嵌套绑定)