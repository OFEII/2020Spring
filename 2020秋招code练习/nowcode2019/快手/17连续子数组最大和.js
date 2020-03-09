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
        let arr = inArr[0].split(',').map(e => +e)
        console.log(sumOfSubArray(arr))
    }
})
function sumOfSubArray(arr) {
    let res = arr[0]
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max+arr[i],arr[i])
        res = Math.max(max, res)
    }
    return res = res>0 ? res : 0
}