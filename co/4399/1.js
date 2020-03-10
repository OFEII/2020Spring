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
        let h =100
        let f =200
        let sum = 100
        for(let i =1;i<n;i++){
            sum  += f/2
            f = f/2
        }
        for(let i =0;i<n;i++){
            h = h/2
        }
        console.log(sum.toFixed(6))
        console.log(h.toFixed(6))


    }
})