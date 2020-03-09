// 组合排列=>推出公式
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr =[]
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    let n = +inArr[0] // n考勤周期的天数
    console.log(comb(n))
})

function comb(n){
    // C(n,2)+C(n,1)+C(n,0)=n*(n-1)/2+n+1
    return 1 + n + n*(n-1)/2
}