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
        let s1 = inArr[0].split(';')[0]
        let s2 = inArr[0].split(';')[1]
        let flag = false
        for(let i in s1){
            //stringObject.substr(start,length)
            if(s1.substr(i)+s1.substr(0,i) === s2){
                flag =true
                break
            }
        }
        console.log(flag)
    }
})