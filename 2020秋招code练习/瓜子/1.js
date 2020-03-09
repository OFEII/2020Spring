const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line)
    if(inArr.length === 1){
        let strArr = inArr[0].split(' ')
        let res = strArr.reverse().join(' ')
        console.log(res)
    }
})
