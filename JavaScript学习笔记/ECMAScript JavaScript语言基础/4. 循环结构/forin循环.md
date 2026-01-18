类似于c++中的==范围for循环==
常用于遍历==对象==
```js
let arr=["one","two","three"]
for(let k in arr){
	//此时k为arr所有元素的下标
	//k 为 字符串类型
}

// 遍历对象
let obj ={
	uneme:"张三",
	agr:"18",
	address:"中国"
}

for(let k in obj ){
	//此时k为obj的属性名('键')
	//k为字符串型 的 属性名
	console.log(obj[k])
}

```