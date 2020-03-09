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
        let s1 = inArr[0]
        let s2 = inArr[1]
        let res = s1.split('?q=')[1]
        let flag = res == s2 ? true : false
        console.log(flag)

    }
})
