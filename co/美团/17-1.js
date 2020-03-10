const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let n = +inArr[0]
        let res = 2**(n-1)
        console.log(res)

    }
})
// f(n) = f(n-1)+f(n-2)+f(n-3)+....+f(1)+1，f(1)=1,f(2)=2.则f(n)=2^(n-1)