const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
rl.on('line', line=>{
    let inArr = line.trim().split(' ')
    let s1 = +inArr[0], s2 = +inArr[1]
    //解法一
    // let res = (parseInt(s1,2) + parseInt(s2,2)).toString(2)
    //解法二
    let res = (BigInt(`0b${s1}`)+BigInt(`0b${s2}`)).toString(2)
    console.log(res)
})