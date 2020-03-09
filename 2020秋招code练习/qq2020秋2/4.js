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
        let n = +inArr[0].trim()  
    }
    if(inArr.length === n+1){
        let sum = 0
        for (let i = 0; i < n; i++) {
            let a = +inArr[i+1].split(' ')[0]
            let b = +inArr[i+1].split(' ')[1]
            sum = sum + a*i + b*(n-i-1)
        }
        console.log(sum)
    }
})

