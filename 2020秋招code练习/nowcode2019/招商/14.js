// 贪心算法 按右端排序，若挑选的数不在区间内，尽可能取右端
// 每次更新p1计数
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let a =[]
let n
rl.on('line', line=>{
    if(!line) return
    inArr.push(line)
    n = +inArr[0]
    if(inArr.length === n+1){
        let p1 = -1, p2 = -1, res = 0
        for (let i = 0; i < n; i++) {
            a[i] = inArr[i+1].split(' ').map(item => +item)
        }
        a = a.sort((a,b) => a[1]-b[1])
        for (let i = 0; i < n; i++) {
            if(a[i][0] > p1){
                res ++
                p1 = p2
                p2 = a[i][1]   
            }
            if(a[i][0] > p1){
                res++
                p1 = a[i][1] -1
            }
        }
        console.log(res)
    }
})