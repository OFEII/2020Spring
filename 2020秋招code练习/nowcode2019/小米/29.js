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
        let n = inArr[0].split(' ')[0].split('').map(e => +e)
        let k = +inArr[0].split(' ')[1]
        let removed = 0
        for (let i = 0; i < k; i++) {
            for (let j = 0; j < n.length; j++) {
                if(n[j]<n[j+1]){
                    n.splice(j, 1)
                    removed++
                    break
                }
            }
        }
        console.log(n.join(''))
    }
})
