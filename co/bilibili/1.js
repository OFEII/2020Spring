const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 3){
        let arr = inArr[1].split(' ').map(e=>+e)
        let sum = +inArr[2]
        console.log(twoSum(arr,sum))
    }
})

function twoSum (arr, sum) {
    let len = arr.length
    let i = 0
    let j = len - 1
    if (len<2) return "notfound"
    while(i<j) {
        let res = arr[i] + arr[j]
        if (res === sum) return [arr[i], arr[j]].join(' ')
        if (res > sum) {
            j--
        }
        if (res < sum) {
            i++
        }
    }
    return "notfound"
}