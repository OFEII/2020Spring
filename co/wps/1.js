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
        let b = n.toString(2).split('').map(e=>+e)
        let cnt=0, max=0
        for (let i = 0; i < b.length; i++) {
            if(b[i]==1){
                cnt++
            }else{
                cnt=0
            }
            if(cnt>max){
                max = cnt
            }
        }
        console.log(max)
    }
})