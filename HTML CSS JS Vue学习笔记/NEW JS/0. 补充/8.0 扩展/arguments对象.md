**`arguments` 是一个类数组对象，包含传给函数的所有参数
它只在普通函数（非箭头函数）内部可用**
```js
function test() {
    console.log(arguments instanceof Array);  // false
    console.log(Array.isArray(arguments));    // false
    console.log(typeof arguments);             // "object"
    
    // 可以像数组一样通过索引访问
    console.log(arguments[0]);  // 第一个参数
    
    // 但没有数组方法
    // arguments.forEach(x => console.log(x));  // TypeError
}
test(1, 2, 3);
```

---
现在可以直接用剩余参数`...x`语法直接代替
```js
// 旧方式：arguments
function sumOld() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
// 新方式：剩余参数（推荐）
function sumNew(...numbers) {
    // numbers 是真数组！
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumNew(1, 2, 3));  // 6
```