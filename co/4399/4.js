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
        let res = [dp1(n),dp2(n),dp3(n)]
        console.log(res.join(' '))
    }
})

function dp1(n){
    let dp = [1,1,2]
    for (let i = 3; i < n+1; i++) {
        dp[i] = dp[i-1]+dp[i-2]
    }
    return dp[n]
}
function dp2(n){
    let dp = [1,1,2,4]
    for (let i = 4; i < n+1; i++) {
        dp[i] = dp[i-1]+dp[i-2]+dp[i-3]
    }
    return dp[n]
}
function dp3(n){
    let dp = [0,0,1,1]
    for (let i = 4; i < n+1; i++) {
        dp[i] = dp[i-3]+dp[i-2]
    }
    return dp[n]
}
