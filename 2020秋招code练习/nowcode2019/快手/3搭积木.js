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
        let arr = []
        for (let i = 0; i < n; i++) {
            arr[i] = inArr[i+1].split(' ').map(e => +e)
        }
        arr.sort((a,b) => a[0]-b[0])
        let maxL = 0
        let dp = new Array(arr.length).fill(1)
        for (let i = 0; i < arr.length; i++) {
            let l = 0, r = maxL
            while (l < r) {
                let mid = ~~((r+l)/2)
                if(dp[mid] <= arr[i][1]){
                    l = mid + 1
                }else{
                    r = mid
                }
            }
            dp[l] = arr[i][1]
            if(l === maxL){
                 maxL++
            }            
        }
        console.log(maxL)
    }
})