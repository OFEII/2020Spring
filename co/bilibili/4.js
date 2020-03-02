const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2){
        let a = inArr[0].split('+').map(e=>parseInt(e))
        let b = inArr[1].split('+').map(e=>parseInt(e))
        let res = a[0]*b[0] - a[1]*b[1] +'+'+((a[0]*b[1]+a[1]*b[0])+'i')
        console.log(res)

    }
})