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
        let s0 = inArr[0]
        let s = s0.split('')
        let s1 = s0.toUpperCase().split('')
        let s2 = s0.toLowerCase().split('')
        let s3 = ''
        let set = new Set()
        for (let i = 0; i < s.length; i++) {
            if(!set.has(s[i])){
                set.add(s1[i])
                set.add(s2[i])
                s3 += s[i]
            }
        }
        console.log(s3)
    }
})