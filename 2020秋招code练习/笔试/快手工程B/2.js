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
        let str = inArr[0]
        let res = letterComb(str)
        console.log(res)
        
    }
})

var letterComb = function(str) {
    let keyboard = {
      "1": [],
      "2": ["a", "b", "c"],
      "3": ["d", "e", "f"],
      "4": ["g", "h", "i"],
      "5": ["j", "k", "l"],
      "6": ["m", "n", "o"],
      "7": ["p", "q", "r", "s"],
      "8": ["t", "u", "v"],
      "9": ["w", "x", "y", "z"]
    }
    let len = str.length
    let t = keyboard[str[len - 1]] || []
    for (let i = len - 2; i >= 0; i--) {
      let d = keyboard[str[i]]
      let t1 = []
      for (let dVal of d) {
        for (let tVal of t) {
          t1.push(dVal + tVal)
        }
      }
      t = t1
    }
    return t
  }
  
