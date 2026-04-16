大D老师讲解~~~
## 🎯 核心作用
**`call()` 和 `apply()` 用于显式指定函数执行时的 `this` 值**，并立即调用该函数。
## 📝 基本语法
```js
// call()：参数逐个传递
func.call(thisArg, arg1, arg2, arg3, ...)

// apply()：参数以数组形式传递
func.apply(thisArg, [arg1, arg2, arg3, ...])
```
## 🔍 核心区别

| 方法        | 参数传递方式 | 性能       | 适用场景       |
| --------- | ------ | -------- | ---------- |
| `call()`  | 逐个列出   | 稍快（参数少时） | 参数数量已知且较少  |
| `apply()` | 数组形式   | 稍慢（需解包）  | 参数数量未知或为数组 |

```javascript
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
const person = { name: 'Alice' };
// call：逐个传参
greet.call(person, 'Hello', '!');  // "Hello, Alice!"
// apply：数组传参
greet.apply(person, ['Hi', '?']);  // "Hi, Alice?"
```

---

## 💡 主要用途

### 1. **改变 `this` 指向**

```js
const obj1 = { name: 'Alice' };
const obj2 = { name: 'Bob' };
function sayName() {
    console.log(this.name);
}
sayName.call(obj1);  // "Alice"
sayName.call(obj2);  // "Bob"
```
### 2. **借用其他对象的方法**
```javascript

// 借用数组方法处理类数组对象
function sum() {
    const total = Array.prototype.reduce.call(arguments, (acc, val) => acc + val, 0);
    return total;
}
console.log(sum(1, 2, 3, 4));  // 10
// 借用数组方法操作字符串
const str = 'hello';
const chars = Array.prototype.slice.call(str);
console.log(chars);  // ['h', 'e', 'l', 'l', 'o']
```
### 3. **继承（构造函数借用）**

```js
function Animal(name) {
    this.name = name;
    this.species = 'Animal';
}
function Dog(name, breed) {
    Animal.call(this, name);  // 借用 Animal 构造函数
    this.breed = breed;
}
const rex = new Dog('Rex', 'Labrador');
console.log(rex.name);     // "Rex"
console.log(rex.species);  // "Animal"
console.log(rex.breed);    // "Labrador"
```
### 4. **将类数组对象转换为数组**
```js
function toArray() {
    return Array.prototype.slice.apply(arguments);
}
console.log(toArray(1, 2, 3));  // [1, 2, 3]
// 使用 call
function toArray2() {
    return [].slice.call(arguments);
}
```

### 5. **求数组最大/最小值**
```js
const numbers = [5, 2, 9, 1, 7];
// 传统方式
const max1 = Math.max.apply(null, numbers);
const min1 = Math.min.apply(null, numbers);
// ES6 方式（更简洁）
const max2 = Math.max(...numbers);
const min2 = Math.min(...numbers);
console.log(max1, min1);  // 9 1
```
## ⚠️ 特殊 `thisArg` 值

|传入值|非严格模式|严格模式|
|---|---|---|
|`null`|全局对象（`window`/`global`）|`null`|
|`undefined`|全局对象|`undefined`|
|原始值（数字、字符串等）|被包装为对象|保持原始值|
```js
function logThis() {
    console.log(this);
}
// 非严格模式
logThis.call(null);     // window/global
logThis.call(undefined);// window/global
logThis.call(123);      // Number {123}
// 严格模式
'use strict';
logThis.call(null);     // null
logThis.call(undefined);// undefined
logThis.call(123);      // 123
```
## 📊 `call()` vs `apply()` 性能对比
```js
// 参数数量较少时，call 更快
function testCall(a, b, c) {
    return a + b + c;
}
testCall.call(null, 1, 2, 3);
// 参数数量未知或为数组时，apply 更方便
const args = [1, 2, 3];
testCall.apply(null, args);
```

---

## 🔄 与 `bind()` 的区别

|特性|`call()` / `apply()`|`bind()`|
|---|---|---|
|**执行时机**|立即执行|返回新函数，不立即执行|
|**返回值**|函数执行结果|新函数|
|**使用场景**|临时改变 `this`|永久绑定 `this`|
```js
const obj = { name: 'Alice' };
function greet() {
    console.log(this.name);
}
// call：立即执行
greet.call(obj);  // "Alice"
// bind：返回新函数，不执行
const boundGreet = greet.bind(obj);
boundGreet();  // "Alice"（调用时才执行）
```
## 🛠️ 实际应用场景
### 1. **类型检测（替代 `typeof`）**
```js
function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}
console.log(getType([]));      // "Array"
console.log(getType({}));      // "Object"
console.log(getType(null));    // "Null"
```
### 2. **继承父类方法**
```js
function Parent(name) {
    this.name = name;
}
Parent.prototype.sayHi = function() {
    console.log(`Hi, I'm ${this.name}`);
};
function Child(name, age) {
    Parent.call(this, name);  // 继承实例属性
    this.age = age;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
const child = new Child('Bob', 10);
child.sayHi();  // "Hi, I'm Bob"
```
### 3. **函数式编程工具**
```js
function map(array, callback) {
    return Array.prototype.map.call(array, callback);
}
map('hello', char => char.toUpperCase());  // ['H', 'E', 'L', 'L', 'O']
```
## ✅ 总结

|方法|特点|适用场景|
|---|---|---|
|`call()`|参数逐个传递|参数已知且较少|
|`apply()`|参数数组传递|参数数量未知或为数组|
|`bind()`|返回新函数|需要永久绑定 `this`|
**一句话总结：`call()` 和 `apply()` 用于显式指定函数执行时的 `this` 并立即调用
区别仅在于参数传递方式；`apply()` 接收数组，`call()` 接收参数列表。**