const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line)
    if(inArr.length === 2){
        let n = +inArr[0]
        let a = inArr[1].split(' ').map(item => +item)
        let res = a.reverse().toString().replace(/,/g,' ')
        console.log(res)
    }
})
