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
        let arr1 =[]
        let arr2 =[]
        for (let i = 0; i < arr.length; i++) {
            arr[i]%2 ===0 ? arr1.push(arr[i]) : arr2.push(arr[i])
        } 
        let res = [...arr1,...arr2]
        console.log(res.join(' '))
    }
})