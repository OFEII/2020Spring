const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let arr = inArr[0].split('')
        for(let i=arr.length-1; i>0; i--){
            if(arr[i]>arr[i-1]){//如果前一项小于本项
                arr.splice(i-1,1)//剔除前一项，确保前面的永远大于后面的
            }
    }
    console.log(arr.join(""))
    }
})