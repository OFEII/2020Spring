const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let n
let m
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    n = +inArr[0].split(' ')[0]
    m = +inArr[0].split(' ')[1]
    if(inArr.length === 2+m){
        let arr = inArr[1].split(' ').map(e => +e)
        console.log(arr)

    }
})