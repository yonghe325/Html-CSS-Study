`CharacterData` 是一个**抽象基类**，代表包含**字符数据**的 DOM 节点
它本身不能直接实例化，但被以下具体节点类型继承：
- **Text**（文本节点）- 最常用
- **Comment**（注释节点）
- **CDATASection**（CDATA 节节点，主要在 XML 中使用）

# 1. 继承关系
```
Node
  └── CharacterData (抽象基类)
       ├── Text
       │    └── CDATASection (XML 中使用)
       └── Comment
```
# 2. CharacterData 提供的属性和方法
## 属性
+ `date` : 节点包含的文本内容
+ `length` : 文本长度
+ `nodeValue` : 同`date`, 继承自`Node`
+ `textContent` : 同`date`, 继承自`Node`
## 方法
+ `appendData(data)` : 在末尾添加文本
+ `insertData(offset, data)` : 在指定位置插入文本
+ `deleteData(offset, count)` : 删除指定范围的文本
+ `replaceData(offset, count, data)` : 替换指定范围的文本
+ `substringData(offset, count)` : 提取指定范围的文本