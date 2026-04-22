数组的归并方法
对数组中的每个元素依次执行回调函数
将结果累积为单个值返回
```js
array.reduce(callback, initialValue)
// callback: (accumulator, currentValue, index, array) => {}
// initialValue: 初始值（可选）
```
## 参数
+ `accumulator`: 累计值, 上一次回调的返回值
+ `currentValue`: 当前元素的值
+ `index`[可选] :当前索引
+ `array`[可选]: 原数组
+ `initialValue`: 初始值, 不传则以数组中第一个元素作为初始值
