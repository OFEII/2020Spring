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
        let a = inArr[0].trim()
        a = JSON.parse(a)
        a.sort((a,b) => b-a)
        console.log(a[2])
    }
})