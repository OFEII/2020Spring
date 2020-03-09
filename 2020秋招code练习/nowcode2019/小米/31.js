const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let t
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    t = +inArr[0].split(' ')[1]
    if(inArr.length === 2+t){
        let n = +inArr[0].split(' ')[0]
        let str = inArr[1]
        for (let i = 0; i < t; i++) {
            let type = +inArr[i+2].split(' ')[0]
            let x = +inArr[i+2].split(' ')[1]
            if(type === 1){
                str = str.substring(n-x).concat(str.substring(0, n-x))
            }else if(type === 2){
                console.log(str[x])
            }
        }
    }
})
