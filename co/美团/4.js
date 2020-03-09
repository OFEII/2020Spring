const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let cnt =0
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    cnt++
    if(inArr.length==cnt){
        console.log(inArr)
    }
})