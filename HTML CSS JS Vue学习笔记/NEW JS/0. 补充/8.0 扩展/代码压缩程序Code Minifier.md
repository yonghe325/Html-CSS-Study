## 🎯 什么是代码压缩程序？
代码压缩程序是一种**工具**，用于减小 JavaScript 文件的大小，加快网页加载速度。
## 📝 主要功能

| 功能 | 说明 | 示例 |
|------|------|------|
| **删除空白字符** | 移除空格、换行、缩进 | `let a = 1` → `let a=1` |
| **缩短变量名** | 将变量名改为单字母 | `userName` → `a` |
| **删除注释** | 移除所有注释 | `// 注释` → 删除 |
| **重写代码** | 优化语法结构 | `true && fn()` → `fn()` |
## 🔍 具体示例
```javascript
// 压缩前
function calculateTotal(price, quantity) {
    // 计算总价
    const tax = 0.1;
    const subtotal = price * quantity;
    const total = subtotal * (1 + tax);
    return total;
}

// 压缩后
function calculateTotal(a,b){const c=0.1,d=a*b,e=d*(1+c);return e}