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
        let k = +inArr[0]
        let list =[1,2,3,4,5,6,7]
        console.log(list[list.length-k])
    }
})