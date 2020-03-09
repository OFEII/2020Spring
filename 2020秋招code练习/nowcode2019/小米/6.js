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
        let str = inArr[0].split(' ')
        let s1 = str[0]
        let s2 = str[1]
        let flag = true
        for (let i = 0; i < s1.length; i++) {
            let index = s2.indexOf(s1[i])
            if(index >= 0){
                s2 = s2.replace(s1[i],'')
            }else{
                flag = false
                break
            }
        }
        console.log(flag)
    }
})
