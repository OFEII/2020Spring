const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2){
        let s1 = inArr[0].split('')
        let s2 = inArr[1].split('')
        s2 = s2.sort().reverse()
        for (let i = 0,j=0; i < s1.length&&j<s2.length; i++) {
            if(s1[i]<s2[j]){
                s1.splice(i,1,s2[j])
                j++
            }
        }
        console.log(s1.join(''))
    }
})