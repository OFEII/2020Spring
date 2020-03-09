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
        let s = inArr[0]
        let res = 0
        if(s[0] !== '-'){
            s = '+' + s
        }
        let str = s.match(/[+|-]{1}\d+/g)
        for (let i = 0; i < str.length; i++) {
            res += +(str[i])
            
        }
        console.log(res)
    }
})
