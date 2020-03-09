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
        let arr = inArr[0].split(' ').map(e => +e)
        let y = arr[0], m = arr[1], d = arr[2]
        let month=[31,31,30,31,30,31,31,30,31,30,31]
        let res = 0
        if((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)){
            month.splice(1, 0, 29)
        } else {
            month.splice(1, 0, 28)
        }
        for (let i = 0; i < m-1; i++) {
            res += month[i]
        }
        res += d
        console.log(res)
    }
})