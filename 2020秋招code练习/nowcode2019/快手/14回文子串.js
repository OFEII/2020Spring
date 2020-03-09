// leetcode 647
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
        console.log(cntSubstrings(s))
    }
})
var cntSubstrings = function(s) {
    let cnt = 0
    function find(s, i, j) { //start往左边跑，end往右边跑，注意边界
        while (i >= 0 && j <s.length && s[i] == s[j]) {
            cnt++
            i--
            j++
        }
    }
    for (let i = 0; i < s.length; i++) {
        find(s, i, i) // 回文串长度为奇数
        find(s, i, i+1)  // 回文串长度为偶数
    }
    return cnt
}

