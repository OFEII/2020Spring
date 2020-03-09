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
        let s = +inArr[0]
        let res = s.toString(2)
        let cnt = 0
        for (let i = 0; i < res.length; i++) {
            if(res[i] == 1) cnt++
        }
        console.log(cnt)
    }
})