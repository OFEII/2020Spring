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
        let s = inArr[0].split('')
        let s1 = '', s2 =''
        for (let i = 0; i < s.length; i++) {
            if (s[i] >= 'a' && s[i] <= 'z') {
                s1+= s[i]
            } else {
                s2 += s[i]
            }
        }
        s1 = s1.split('').sort().join('')
        s2 = s2.split('').sort().join('')
        console.log(s1+s2);
    }
})