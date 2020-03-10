const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let n = +inArr[0]
        let res = lastRemaining(n,3)
        console.log(res+1)

    }
})

var lastRemaining = function(n, m) {
    let res = 0
    for(let i =2;i<=n;i++){
        res = (res+m)%i
    }
    return res
};