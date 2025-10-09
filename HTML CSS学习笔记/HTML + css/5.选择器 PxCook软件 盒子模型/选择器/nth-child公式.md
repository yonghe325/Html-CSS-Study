作用 : 根据元素的==结构关系==查找元素
偶数标签 : 2n
奇数标签 : 2n+1
找到5的倍数的标签 : 5n
找到第5个以后的标签 : n+5
找到第5个以前的标签 : -n+5
```
        li:nth-child(2n){
            color: red;
            background-color: blue;        
        }
        li:nth-child(2n+1){
            color: blue;
            background-color: red;
        }
        
 <ul>
        <li>111</li>
        <li>222</li>
        <li>333</li>
        <li>444</li>
        <li>555</li>
        <li>666</li>
        <li>777</li>
        <li>888</li>
        <li>999</li>
        <li>000</li>
</ul>
```
![[nth-child公式.png]]