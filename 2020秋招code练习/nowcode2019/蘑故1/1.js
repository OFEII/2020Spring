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
        let arr = inArr[0].split(' ').map(e=>+e)
        let x = arr[0]
        let y = arr[1]
        let res = uniquePaths(x, y)
        console.log(res)
        }
})
var uniquePaths = function(x, y) {
    let dp = []
    for(let i=0; i<=x; i++)
    {
        dp[i]=[]
    }
    for(let i=0; i<=x; i++)
    {
        for(let j=0; j<=y; j++)
        {
            if(i==0 || j==0)
                dp[i][j]=1
            else
                dp[i][j]=dp[i][j-1]+dp[i-1][j]
        }
    }
    return dp[x][y]
};
