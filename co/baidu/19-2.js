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
        let xy = inArr[0].split(' ').map(e=>+e)
        let x = nk[0], yk = nk[1]
        let cnt = 0
        if(x >= y/2){
            if(x >= y){
                x = y - 1
            }
             cnt = x - Math.floor(y/2)
        }
        console.log(cnt)
    }
})