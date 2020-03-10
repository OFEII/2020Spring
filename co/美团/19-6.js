const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2){
        let nk = inArr[0].split(' ').map(e=>+e)
        let n = nk[0], k = nk[1]
        let arr = inArr[1].split(' ').map(e=>+e)
        let dp = new Array(n+1).fill(0)
        let sums = 0
        let cnt = 0
        for (let i = 0; i < n; i++) {
            let l = Math.max(0,i-arr[i])
            let r =Math.min(n,i+arr[i]+1)
            dp[l]+=1
            dp[r]-=1
        }
        for (let i = 0; i < n; i++) {
            sums += dp[i]
            if(sums>=k){
                cnt++
            }
        }           
        console.log(cnt)
    }
})
// let dp = new Array(k+1).fill(0).map(()=>new Array(n+1).fill(0))
//         let res = []
//         for (let i = 1; i < n+1; i++) {
//             for (let j = 1; j < k+1; j++) {
//                 if(j<=arr[i-1]){
//                     dp[i][j] = Math.min(dp[i-1][j],arr[i-1])
//                 }else{
//                     dp[i][j] = Math.min(dp[i-1][j],dp[i-1][j-arr[i-1]]+arr[i-1])
//                 }
//             }

//         }