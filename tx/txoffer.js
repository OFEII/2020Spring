对于const arr=[1, 3, 9, 6, 10, 7, 3, 3, 6, 20]; 请完成编码，输出去重并升序排列的数组，结果为[1, 3, 6, 7, 9, 10, 20];

---
> 5.编码题: 有如下一段代码

```javascript
function request(number) {
    const time = Math.random() * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number);
        }, time);
    });
}
for (let i = 0; i < 10; i++) {
    request(i).then(res => console.log(res));
}
```
某一次运行结果，返回是：
```
8
6
0
4
9
2
3
1
5
7
```
如何改造此段代码，实现返回值是顺序是0-9 ？


---
>6.编码题: 写一个正则('abc345efgabcab').replace(？ ,? )//结果'abc[3][4][5]efgabcab' 

---
