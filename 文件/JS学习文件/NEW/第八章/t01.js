// 1. prompt - 弹出输入框（阻塞）
let name = prompt('请输入你的名字:', '默认值');
console.log('你输入了:');
// 返回：字符串 或 null（取消时）

// 2. confirm - 确认框
let isOk = confirm('确定要删除吗？');
console.log(isOk);  // true 或 false

// 3. 表单输入（最常用）
// HTML: <input id="username" type="text">
let username = document.getElementById('username').value;

// 4. 事件监听
document.getElementById('btn').onclick = function() {
    let value = document.getElementById('input').value;
    console.log(value);
};