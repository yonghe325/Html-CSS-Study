一个典型的网页只有一个全局上下文
当`<iframe></iframe>`(==内联框架==)元素了这一切
通过`<iframe>`，可以在一个页面里嵌入多个完全独立的页面(子页面)
# `<iframe>`的工作原理
每个`<iframe>`都指向一个单独的HTML文档
每个`<iframe>`都拥有自己单独的一个全局上下文
## Realm
每个 `<iframe>` 都拥有一个==完全独立且隔离的JavaScript运行环境==
这个环境被称为“==Realm==”（领域）
每个 Realm 都包含自己的一套完整的基础设施，其中就包括：
+ 一个独立的全局对象(即该 iframe 中的 `window`)
+ 一套独立的、与该全局对象绑定的内置对象
	(`Array`、`Object`、`Function` 等构造函数)
## 构造函数的差异
**每个全局上下文的构造函数在内存中的位置不同**
**每个不同全局作用域下的构造函数是==不同的函数对象==**
### instance失效
不同的构造函数会导致instanceof操作符判断出错
`instanceof` 的工作原理是检查一个对象的*原型链*上
是否有**右侧构造函数**的 `prototype` 属性
所以instanceof只能检测在本全局作用作用域下生成的结构或对象
```js
if (value instanceof Array){
	// 操作数组
}
```
所以instance会把所有来自其他全局作用域的结构/类型都认为是`flase`
###  instance的替代方法 : `Array.isArray()`
为了解决跨Realm判断数组的问题，使用 `Array.isArray()`：
- 不依赖于具体的构造函数
- 基于内部类型标识（Class 或 Symbol.toStringTag）
- 无论数组来自哪个 Realm，都能正确识别
```js
const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
const iframeArray = new iframe.contentWindow.Array(1,2,3);
//使用iframeArray中的Array()函数
console.log(iframeArray instanceof Array);        // false ❌
console.log(Array.isArray(iframeArray));          // true ✅
console.log(Object.prototype.toString.call(iframeArray)); // "[object Array]" ✅
```