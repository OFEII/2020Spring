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
        let s
        let arr =[2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3]
        let t = Math.sqrt(2*n)
        for (let i = t; i >=0; i--) {
            if(i*(i+1) < 2*n){
                s = i
                break
            }
        }
        s = Math.floor(n-(s*(s+1))/2)
        

        console.log(arr[s%16])
    }
})