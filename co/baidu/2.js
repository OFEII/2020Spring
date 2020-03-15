
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
        let res = []
        for (let i = 1; i < arr.length-1; i++) {
            res.push(Math.abs(arr[i]-arr[i-1]) +Math.abs(arr[i]-arr[i+1]))
        }
        let index = res.indexOf(Math.max(...res))
        arr.splice(index+1,1)
        let distance = arr.reduce((acc,cur,i)=>{
            if(i===0) {
                return acc
            }
            return acc + Math.abs(cur-arr[i-1])
        },0)

        console.log(distance)
    }
})