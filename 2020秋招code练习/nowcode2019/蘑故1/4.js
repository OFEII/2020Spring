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
        let arr = inArr[0].split(',').map(e=>+e)
        let res = new Array(arr.length).fill(1)
        let len = arr.length
        let cnt = 0
        for(let i = 1 ; i < len ; i++){
            if(arr[i] > arr[i-1]){
                res[i] = res[i-1] + 1;
            }
        }
        for(let i = len -1 ; i > 0 ; i--){
            if(arr[i-1] > arr[i] && res[i-1] <= res[i]){
                res[i-1] = res[i] + 1;
            }
        }
        for(var i=0;i<len;i++){
             cnt += res[i];
        }
        // console.log(res)
        console.log(cnt)

    }
})