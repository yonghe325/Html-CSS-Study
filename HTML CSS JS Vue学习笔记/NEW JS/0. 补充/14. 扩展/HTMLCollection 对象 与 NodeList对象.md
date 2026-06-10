# **HTMLCollection**：只包含元素
**实时的**，DOM 改变它自动变
	只能存放元素节点
`HTMLCollection` 对象还有一个额外的方法 `namedItem()`
可通过标签的 `name` 属性取得某一项的引用例如，
# **NodeList**：可包含任何节点
可能是静态, 也可能是动态
- [[2. querySelectorAll() 方法|querySelectorAll() 方法]]：静态
 - getElementsByTagName：动态
 - childNodes：动态（规范要求）
可以存放任意类型的节点