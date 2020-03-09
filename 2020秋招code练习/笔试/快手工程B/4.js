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
        arr.sort((a,b) =>a-b)
        // let dp = new Array(n).fill(0).map(()=> new Array(n).fill(0))
        let dp = [...new Array(n)].map(() => ({}))
        let max = 2
        if(arr.length<2) console.log(0)
        for (let i = 1; i < arr.length; i++) {
            for (let j = 0; j < i; j++) {
                let diff =arr[i]-arr[j]
                if(dp[j][diff]>0){
                    dp[i][diff] = Math.max(dp[j][diff]+1, dp[j][diff])
                }else{
                    dp[i][diff] = 2
                }
                max = Math.max(max,dp[i][diff])
            }
        }
        console.log(max)
    }
})
