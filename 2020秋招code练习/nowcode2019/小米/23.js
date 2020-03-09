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
        let n = +inArr[0].split(' ')[0]
        let m = +inArr[0].split(' ')[1]
        let cnt = 0
        dfs(0,1)
        console.log(cnt)
        function dfs(sum,p) {
            if(sum == m && p == n+1){
                cnt++
            }
            let t = 0
            for (let i = p; i <= n; i++,t*=10) {
                t += i
                dfs(sum+t, i+1)
                if(p!=1){
                    dfs(sum-t, i+1)
                }
            }
        }
    }
})

