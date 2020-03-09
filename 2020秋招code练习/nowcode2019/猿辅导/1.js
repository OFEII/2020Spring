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
        let p = +inArr[0].split(' ')[0]
        let bus = +inArr[0].split(' ')[1]
        let pArr = inArr[1].split(' ').map(e => +e)
        let cnt = -1, arr =[]
        for (let i = 0; i < p; i++) {
            if(i%bus === 0){
                cnt++
                arr[cnt] = []
            }
            arr[cnt].push(i)
        }
        let res = []
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                res.push(pArr[arr[j][i]])
                
            }
            
        }
        console.log(res)
    }
})