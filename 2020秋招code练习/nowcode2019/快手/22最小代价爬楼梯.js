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
        let arr = inArr[0].split(',').map(e => +e)
        let res =[0,0]
        for (let i = 2; i <= arr.length; i++) {
            res[i] = Math.min(res[i-1]+arr[i-1],res[i-2]+arr[i-2])
        }
        console.log(res[res.length-1])
     
    }
})