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
        let str = inArr[0].split('')
        let res = []
        let right = 0
        for (let i = 0; i < str.length; i++) {
            let temp = str[i]
            let index = str.lastIndexOf(temp)
            if(i<=right){
                right = Math.max(right, index)
            }if(i>right){
                res.push(right+1)
                str= str.slice(right+1)
                right =0
                i=-1
            }
        }
        res.push(str.length)
        console.log(res.join(' '))
    }
})