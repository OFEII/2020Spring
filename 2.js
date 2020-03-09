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
        console.log(p(n))
        

    }
})
function p(n) {
    let res = (10+1000*n)/1010
    let final = 1
    return res<1? res.toFixed(6) : final.toFixed(6)
}

