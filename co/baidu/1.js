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
        let res = [...new Set(arr)].sort((a, b) => a - b)
        if(res[2]){
            console.log(res[2]) 
        }else{
            console.log(-1) 
        }
    }
})