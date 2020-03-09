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
        let x = +inArr[0].split(' ')[0]
        let k = +inArr[0].split(' ')[1]
        let res = x.toString(k)
        console.log(res)
    }
})
// console.log([1,2,3].splice(1,1,1) === [2])