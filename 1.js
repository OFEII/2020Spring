const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let n = +inArr[0]
        let res = fib(n)
        console.log(res)
    }
})

function fib(n) {
    let dp = new Array(n+1).fill(0)
    dp[0]=0
    dp[1]=1
    dp[2]=1
    dp[3]=1
    dp[4]=1
    dp[5]=2
    dp[6]=3
    for (let i = 7; i < n+1; i++) {
        dp[i] =dp[i-1]+dp[i-4]
    }

    return dp

}