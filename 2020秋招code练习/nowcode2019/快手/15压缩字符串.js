// leetcode 443
//双指针解法
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
        let s = inArr[0].split('')
        console.log(compress(s))
    }
})
var compress = function (s) {
    let m = s.length, res = ''
    for (let i = 0; i < m; i++) {
        let k = i
        while (s[k] === s[k + 1]) k++
        let sum = k - i + 1
        res += (sum > 1 ? sum : 1) + s[i] 
        i = k
    }
    for (let i = 0; i < res.length; i++) {
        s[i] = res[i]
    }
    return res
}