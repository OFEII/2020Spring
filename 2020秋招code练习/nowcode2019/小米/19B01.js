const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line)
    if(inArr.length === 1){
        let arr = inArr[0].split(',').map(item => +item)
        let tag = arr.length-1
        let sum
        let res =0
        for (let i = 0; i < tag; i++) {
            for (let j = i+1; j < tag; j++) {
                if(arr[j] + arr[i] === arr[tag]){
                    sum = i+j
                    res += sum
                }
                
            }
            
        }
        console.log(res)
    }
})