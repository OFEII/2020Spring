const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let n
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    n = inArr.length
    if(n === 2){
        let a = inArr[0].split(',').map(e => +e)
        let b = inArr[1].split(',').map(e => +e)
        let res = [...a,...b]
        res.sort((a,b) => a-b)
        console.log(line)
    }

})