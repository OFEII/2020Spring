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
        let arr = inArr[0].split('')
        var n = 0
        var deep = 0
        for(let i =0;i<arr.length;i++){
            if(arr[i]=='['){
                n++
                deep = n>deep?n:deep;
            } else if(arr[i]==']'){
                n--
            }
        }
        console.log(deep)
    }
})
