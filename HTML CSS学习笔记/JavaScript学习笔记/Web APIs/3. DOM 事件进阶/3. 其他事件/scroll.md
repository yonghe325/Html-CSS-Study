监听页面滚动
```js
对象.addEventLister('scroll',function(){
	...	
})
window.addEventLister('scroll',function(){
	...	
})
```
当滚动条移动时, 触发事件
通常是获取html标签
对其进行监听
```js
document.documentElement
//这就是html标签
    window.addEventListener('scroll', function (e) {
      console.log(document.documentElement.scrollTop);
    })
//获取整个界面的被滚去的值

```
# 对象属性
## scrollLeft + scrollTop
获取被卷去的大小
获取元素内容往左, 往上滚动出去, 看不到的距离
==这两个值可被读写, 即可被修改==
==无单位==