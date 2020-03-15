// 一个花坛中有很多花和两个喷泉。

// 喷泉可以浇到以自己为中心，半径为r的圆内的所有范围的花。

// 现在给出这些花的坐标和两个喷泉的坐标，要求你安排两个喷泉浇花的半径r1和r2，
// 使得所有的花都能被浇到的同时, r12 + r22 的值最小。

// 输入描述:
// 第一行5个整数n，x1，y1，x2，y2表示花的数量和两个喷泉的坐标。
// 接下来n行，每行两个整数xi, yi表示第i朵花的坐标。
// 满足1 <= n <= 2000，花和喷泉的坐标满足-107<= x, y <= 107。

// 输出描述:
// 一个整数，r12 + r22 的最小值。

// 输入例子1:
// 2 -1 0 5 3
// 0 2
// 5 2

// 输出例子1:
// 6
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    let arr = inArr[0].split(' ').map(e=>+e)
    let [n,x1,y1,x2,y2] = arr
    if(inArr.length === n+1){
        let flower = []
        let x =[], y=[]
        let r1 = []
        let r2 = []
        let dis = []
        for (let i = 0; i < n; i++) {
            flower[i] = inArr[i+1].split(' ').map(e=>+e)
            x[i] = flower[i][0]
            y[i] = flower[i][1]
        }
        for (let i = 0; i < n; i++) {
            r1[i] = (x1-x[i])**2 + (y1-y[i])**2
            r2[i] = (x2-x[i])**2 + (y2-y[i])**2
            dis[i] = [r1[i],r2[i]]
        }
        dis.sort(function(a, b) {
            return a[0] < b[0] ? 1 : -1
        })
        let res = dis[0][0],d2 =0
        for (let i = 0; i < n; i++) {
            res = Math.min(res,dis[i][0]+d2)
            d2 = Math.max(d2,dis[i][1])
        }
        console.log(Math.min(res,d2))
    }
})