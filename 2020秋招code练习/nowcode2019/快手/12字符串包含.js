const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})

rl.on('line',line=>{
    let inArr = line.split(' ')
    let a = inArr[0]
    let b = inArr[1]
    let res = (a.indexOf(b) != -1 || b.indexOf(a) != -1) ? 1: 0
    console.log(res)
})
