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
        let i = 1
        while (i*(i+1)/2 <n) {
            i++
        }
        console.log(i)
        // let arr=[]
        // for (let i = 1; i < n+1; i++) {
        //     for (let j = 0; j < i; j++) {
        //         arr.push(i)
                
        //     }
        // }
        // console.log(arr[n-1])
    }
})