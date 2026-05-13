属性节点是 DOM 中表示**HTML/XML 元素属性**的节点类型
它是 `NamedNodeMap` 中存储的个体，每个属性对应一个 `Attr` 对象
`Attr` 对象可通过元素节点的 `attributes` 属性获得
	转到[[4. attributes 属性|attributes 属性]]

| 属性             | 描述                       | 示例                                 |
| -------------- | ------------------------ | ---------------------------------- |
| `name`         | 属性名称                     | `"class"`, `"id"`, `"data-custom"` |
| `value`        | 属性值，可读写                  | `"box"`, `"42"`                    |
| `specified`    | 是否在 HTML 中显式指定（始终为 true） | `true`                             |
| `ownerElement` | 所属的元素节点                  | `div` 元素                           |
| `nodeName`     | 同 `name`                 | `"class"`                          |
| `nodeValue`    | 同 `value`                | `"box red"`                        |

```js
const attr = element.attributes.getNamedItem('id');
attr.name;              // "id"
attr.value;             // "myId"
attr.nodeName;          // "id" (等价于 name)
attr.nodeValue;         // "myId" (等价于 value)
attr.specified;         // true (现代浏览器总是 true)
attr.ownerElement;      // 指向 element 本身
```