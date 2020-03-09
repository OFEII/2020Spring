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
        let n = +inArr[0]
        let arr = [1,1]
        let sum = arr[0] + arr[1]
        if(n === 1){
            console.log(0)
        }else if(n === 2){
            console.log(1)
        }else{
            for (let i = 2; i <= n; i++) {
                arr[i] = arr[i-1] + arr [i-2]
                sum += arr[i]
                if(sum >= n){
                    console.log( 2*arr[i-1]+arr[i-2]-1)
                    break
                }
            }
        }
    }
})