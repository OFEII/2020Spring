const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 3){
        let n = +inArr[0]
        let p = inArr[1].split(' ').map(e => +e)
        let m = +inArr[2]
        let arr = new Array(m+1).fill(0)
        arr[0] = 1
        for (let i = 0; i < n; i++) {
            for (let j = m; j >= p[i]; j--) {
                arr[j] = arr[j] || arr[j-p[i]]
            }
        }
        console.log(arr[m])
    }
})
    //0-1背包问题
    //状态转移方程可简化为：F[i][j] = F[i - 1][j] || F[i - 1][j - v[i]]\
    // 典型的0-1背包问题，状态转移方程为f[i][j]=f[i-1][j] || f[i-1][j-v[i]]，优化为一维，从右往左更新一维数组，初始化f[0]=1，因为m为0时不取任何物品就成立。