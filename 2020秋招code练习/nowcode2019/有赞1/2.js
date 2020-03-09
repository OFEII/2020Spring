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
        let arr = inArr[0].slice(1,-1).split(',').map(e=>+e)
        let dp = new Array(arr.length+1).fill(1)
        let i = 0
        let flag = true
        while (i<arr.length) {
            dp[i]=0
            i+=arr[i]
            if(dp[i] == 0){
                console.log(false)
                flag = false
                break
            }
        }
        if(flag){
            console.log(tur)
        }
    }
})
