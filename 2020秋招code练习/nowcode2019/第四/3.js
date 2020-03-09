const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2){
        let s1 = inArr[0]
        let s2 = inArr[1]
        console.log(multiply(s1, s2))
    }
})
var multiply = function(num1, num2) {
  return (BigInt(num1)*BigInt(num2)).toString();
};
