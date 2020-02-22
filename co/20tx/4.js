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
        let a = inArr[1].split(' ').map(e=>+e)
        let b = inArr[2].split(' ').map(e=>+e)
        let dp = new Array(n+1).fill(0).map(()=> new Array(2).fill(0))
        dp[0][0] = dp[0][1] = 0
        for(let i=1;i<=n;++i){
            dp[i][0]=Math.max(dp[i-1][1]+a[i],dp[i-1][0]);
            dp[i][1]=Math.max(dp[i-1][0]+b[i],dp[i-1][1]);
        }
        let res = n-Math.max(dp[n-1][0],dp[n-1][1]+1)
        console.log(res)
        // console.log(dp)
    }
})