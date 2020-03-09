const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let n = +inArr[0]
        console.log(trimulti(n))
    }
})

function trimulti(n) {
    let dp = [0]
    let min
    for (let i = 1; i <= n; i++) {
        min = Infinity
        for (let j = 1; j ** 3 <= i ; j++) {
            min = Math.min(min, dp[i-j**3])
        }
        dp[i] = 1 + min 
    }
    return dp[n];
}