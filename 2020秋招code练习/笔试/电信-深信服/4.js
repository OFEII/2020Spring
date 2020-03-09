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
        if(isHuiwen(n)){
           console.log('this number is a huiwen') 
        }else{
           console.log('this number is not a huiwen') 
        }
        

    }
})

var isHuiwen = function(n) {
    let res = 0
    if (n < 0 || n % 10 === 0 && n !== 0) {
      return false
    }
    while (n > res) {
      res = res * 10 + n % 10
      n = ~~(n / 10)
    }
    return res === n || n === ~~(res / 10)
  }