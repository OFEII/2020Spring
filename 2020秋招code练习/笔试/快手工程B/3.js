const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let n
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    n = +inArr[0]
    if(inArr.length === 2){
        let arr = inArr[1].split(' ').map(e => +e)
        if(n === 0) console.log(0) 
        if(n === 1) console.log(arr[0])
        else{
            let sum = 0
            for (let i = 0; i < n; i++) {
                sum += arr[i]
            }
            let m = sum/2
            let dp = new Array(m+1).fill(0)
                for (let i = 0; i <n; i++) {
                    for (let j = m; j >0; j--) {
                        if(arr[i] <= j && dp[j-arr[i]]+arr[i] > dp[j]){
                        dp[j] = dp[j-arr[i]] + arr[i]
                    }
                }
            }
            console.log(sum-2*dp[m])
        }
    }
})

