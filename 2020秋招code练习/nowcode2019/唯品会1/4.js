const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let n
rl.on('line',line=>{
    if(!line) return
    inArr.push(line)
    if(inArr.length === 1){
        k = +inArr[0].split(' ')[0]
        n = +inArr[0].split(' ')[1]
    }
    if(inArr.length === n+1){
        let res = []
        let ans
        for (let i = 0; i < n; i++) {
             res[i] = inArr[i+1].split(' ').map(e => +e)
        }
        res = [].concat(...res).sort((a,b) => a-b)
        ans = res[k-1]
        console.log(ans)
    }
})