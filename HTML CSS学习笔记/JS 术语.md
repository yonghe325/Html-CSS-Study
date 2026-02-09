#### 根对象（Roots）
：全局对象、当前调用栈中的变量等^a1
#### 可达性（Reachability）
从根对象能够访问到的对象就是可达的^a2
#### 代际假说（Generational Hypothesis）
大多数对象很快就死，少数对象活得久^a3 
#### 词法环境记录(Lexical Environment Record)
#### JavaScript引擎
JavaScript 引擎是**执行 JavaScript 代码的程序/解释器**
将编写的JavaScript代码转换为浏览器可执行的指令

| 引擎                         | 所属浏览器/环境            | 特点                     |
| -------------------------- | ------------------- | ---------------------- |
| **V8**                     | Chrome、Node.js、Edge | 性能最强，C++编写，开源          |
| **SpiderMonkey**           | Firefox             | 第一个JS引擎，Brendan Eich开发 |
| **JavaScriptCore (Nitro)** | Safari              | Apple开发，注重能效           |
| **Chakra**                 | 旧版 Edge             | 微软开发，已弃用               |
#### 原型
#### 代码执行流