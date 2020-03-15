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
        let n = inArr[0].split(' ').map(e=>+e)
        let a =n[0].toString(2).padStart(32,0)
        let b =n[1].toString(2).padStart(32,0)
        let cnt = 0
        for (let i = 0; i < 33; i++) {
            if(a[i]!=b[i]){
                cnt++
            }
        }
        console.log(cnt)       
    }
})