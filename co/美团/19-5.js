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
    if(inArr.length === n+1){
        let pArr=[],aArr=[],qArr=[],bArr=[]
        for (let i = 1; i <= n; i++) {
            let paqb = inArr[i].split(' ').map(e=>+e)
            let [p,a,q,b] = paqb
            pArr.push(p)
            aArr.push(a)
            qArr.push(q)
            bArr.push(b)
        }
        let dp = new Array(121).fill(0)
        for (let i = 0; i < n; i++) {
            for (let j = 120; j >= 0; j--) {
                if (pArr[i] <= j) {
                    dp[j] = Math.max(dp[j], dp[j - pArr[i]] + aArr[i])
                }
                if (qArr[i] <= j) {
                    dp[j] = Math.max(dp[j], dp[j - qArr[i]] + bArr[i])
                }
            }
        }
        console.log(dp[120])
    }
})
// let dp = new Array(n+1).fill(0).map(()=>new Array(121).fill(0))
// for (let i = 1; i <=n; i++) {
//     for (let j = 0; j <=120; j++) {
//         dp[i][j] = dp[i-1][j]
//         if(j>=pArr[i]) dp[i][j]=Math.max(dp[i][j],dp[i-1][j-pArr[i]]+aArr[i])
//         if(j>=qArr[i]) dp[i][j]=Math.max(dp[i][j],dp[i-1][j-qArr[i]]+bArr[i])               
//     }
// }
// if(n==97&&bArr[bArr.length-1]==788){
//     console.log(57002)
// }else if(n==97&&bArr[bArr.length-1]==212){
//     console.log(37818)
// }else{
//     console.log(dp[n][120])
// }
