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
        for (let i = 0; i < n; i++) {
             arr[i] = +inArr[i+1]
        }
        console.log(maxsum(arr))
    }
})
function maxsum(arr) {
    if(arr.length === 1){
        return arr[0]
    }
    let max = 0, temp = 0
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i]
        max = Math.max(temp,max)
        if(temp<0){
            temp = 0
        }
    }
    return max
}