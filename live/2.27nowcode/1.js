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
        let n = +inArr[0]
        if(n<10){
            console.log(0)
        }else{
            let res = change(n)
            console.log(res)
        }
    }
})
function change(n){
    let cnt = 0
    let arr=[]
    let num =1
    for(let k=0;;k++){
        for (let j = 0;;j++) {
            arr[j] = n%10
            if(n<10){
                break
            }
            n =n /10
            n =parseInt(n)
        }
        cnt++
        for (let i = 0; i < arr.length; i++) {
            num = arr[i]*num
        }
        n = num
        if(n<10){
            break
        }
    }
    return cnt
}