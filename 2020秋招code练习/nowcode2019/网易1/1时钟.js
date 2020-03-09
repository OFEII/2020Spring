const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let n
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    n = +inArr[0]
    if(inArr.length === n+1){
        let arr = []
        let res = []
        let i = 0
        while (i<n) {
            arr[i] = inArr[i+1].split(':').map(e => +e)
            arr[i][0] = arr[i][0] > 23 ? '0'+ arr[i][0]%10 :arr[i][0]
            arr[i][1] = arr[i][1] > 59 ? '0'+ arr[i][1]%10 :arr[i][1]
            arr[i][2] = arr[i][2] > 59 ? '0'+ arr[i][2]%10 :arr[i][2]
            res = arr[i][0].toString().padStart(2,'0')+':'+arr[i][1].toString().padStart(2,'0')+':'+arr[i][2].toString().padStart(2,'0')
            console.log(res)
            i++
        }
    }
})