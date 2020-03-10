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
        let nx = inArr[0].split(' ').map(e=>+e)
        let n = nx[0], x = nx[1]
        let arr = inArr[1].split(' ').map(e=>+e)
        let dp = new Array(x+1).fill(Infinity)
        for (let i = 0; i < n; i++) {
            for (let j = x; j >=0; j--) {
                if(j<=arr[i]){
                    //如果当前凑单价格小于等于price，必须点当前price的菜，除非有比当前价格更小的菜
                    dp[j] = Math.min(dp[j],arr[i])
                }else{
                    //如果凑单价格大于当前price，那么就看下原来的凑单价最小还是
                    //当前菜品的价格，加上j-price的价格最少需要多少元凑单
                    dp[j] = Math.min(dp[j],dp[j-arr[i]]+arr[i])
                }
                
            }
        }
        console.log(dp[x])
    }
})