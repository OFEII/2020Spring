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
        let step = inArr[0]
        let n = +inArr[1]
        let res = 0
        let i = 0
        while (res < n || (res-n)%2 !==0) {
            res += i
            i++ 
        }
        console.log(i+1)


    }
})