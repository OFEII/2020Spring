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
        let arr= [1,5,10,20,50,100]
        let res = coinChange(arr,n)
        console.log(res)

    }
})

var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(0)
    dp[0] = 0
    for (let coin of coins ) {
      for (let i = 1; i <= amount; i++) {
        if (i - coin >= 0) {
            dp[i] = dp[i] + dp[i - coin]
        }
      }
    }
    return dp[amount]
}