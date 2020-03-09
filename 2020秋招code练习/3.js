const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let n
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    n = +inArr[0]
    if(inArr.length === n+1){
        let arr = []
        let res =[]
       for (let i = 0; i < n; i++) {
           arr[i] = +inArr[i+1]
       }
       for (let i = 0; i < arr.length; i++) {
           res[i] = maxnum(arr[i])
           console.log(+res[i])
           
       }    
    }
})

function maxnum(n) {
    let cnt=0
    let res =[]
    if(n<9){
        return n
    }else{
        for (let i = 0; i < n; i+=9) {
            cnt++
        }
    }
    res.push(n-(cnt-1)*9)
    for (let i = 1; i < cnt; i++) {
        res.push(9)
        
    }
    return res.join('')
}