//leetcode 70 climbStairs 
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
        console.log(climbStairs(n))
    }
})
var climbStairs = function(n) {
    if(n<3)return n
    let f1=1, f2 =2 ,f, i=3
    while(i++<=n){
        f=f1+f2
        f1=f2
        f2=f
    }
    return f

};