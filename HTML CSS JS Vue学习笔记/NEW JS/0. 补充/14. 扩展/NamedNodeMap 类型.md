`NamedNodeMap` 是一个**类数组对象**，用于存储**属性节点**的集合
它是 DOM 中一个相对底层且较少直接使用的类型，但在理解 DOM 属性机制时很重要
# 方法
| 方法                                        | 描述            | 返回值              |
| ----------------------------------------- | ------------- | ---------------- |
| `getNamedItem(name)`                      | 通过名称获取属性节点    | Attr 对象 或 null   |
| `setNamedItem(attr)`                      | 添加/替换属性节点     | 被替换的 Attr 或 null |
| `removeNamedItem(name)`                   | 通过名称删除属性节点    | 被删除的 Attr        |
| `item(index)`                             | 通过索引获取属性节点    | Attr 对象 或 null   |
| `getNamedItemNS(namespace, localName)`    | 通过命名空间获取属性    | Attr 对象          |
| `setNamedItemNS(attr)`                    | 使用命名空间添加/替换属性 | 被替换的 Attr        |
| `removeNamedItemNS(namespace, localName)` | 通过命名空间删除属性    | 被删除的 Attr        |
# 属性节点Attr 对象