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
        let n = inArr[0].split(' ').map(e=>+e)
        let a =n[0]
        let b =n[1]
        let cnt = 0
        for (let i = a; i < b; i++) {
            if(isPrime(a)){
                cnt++
            }
        }
        console.log(cnt)       
    }
})
function isPrime(k) {
    if (k === 1) {
        return false
    }
    for(let i = 2; i < k; i++) {
        if (Number.isInteger(k/i)) {
            return false
        }
    } 
    return true   
}