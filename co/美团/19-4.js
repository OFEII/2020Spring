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
        let n = +inArr[0]
        let arr = inArr[1].split(' ').map(e=>+e)
        let cnt = 0
        for (let i = 1; i < n; i++) {
            cnt+= Math.max(arr[i-1]-arr[i],0)
        }
        console.log(cnt+arr[n-1])
    }
})