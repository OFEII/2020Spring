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
        let s = inArr[0]
        let res = []
        let temp = []
        let cnt = 0
        for (let i = 0; i < s.length; i++) {
            s[i]=='['? cnt++:cnt--
            if(cnt<0){
                cnt++
                res.push('[')
            }
        }
        for (let i = 0; i < cnt; i++) {
            temp.push(']')
        }
        console.log(res.join('')+s+temp.join(''))
    }
})