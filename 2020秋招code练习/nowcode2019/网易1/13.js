//Math.max() =>over
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
        let arr = inArr[0].split(' ').map(e=>+e)
        let a = arr[0],
            b = arr[1],
            c = arr[2]
        let res = Math.max(a+b+c,(a+b)*c,a+b*c,a*b+c,a*b*c,a*(b+c))
        console.log(res)
    }
})   