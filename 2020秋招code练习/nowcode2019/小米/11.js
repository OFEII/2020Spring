const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 5){
        let m = +inArr[0]
        let n = +inArr[1]
        let x = +inArr[2]
        let y = +inArr[3]
        let k = +inArr[4]
    }
})