const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2){
        let n = +inArr[0]
        let arr = inArr[1].split(' ').map(e=>+e)
        arr.sort((a,b)=>a-b)
        let res = arr[arr.length-n]+arr[Math.floor(arr.length/2)-1]
        console.log(res)
  

    }
})