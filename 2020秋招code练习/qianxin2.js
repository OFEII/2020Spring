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
        let n= +inArr[0]
        let numArr =[]
        let cnt = 0
        for (let i = 0; i < n; i++) {
            numArr[i] = cnt+i+1
            if(c4(numArr[i]) == 1){
                numArr.splice(i,1,numArr[i]+1)
                cnt++
            }  
        }

        console.log(numArr[n-1])
    }
})

function c4(x) {
    let flag = 0
    let str = x.toString()
    var reg = new RegExp('[4]')
    if(str.match(reg)){
        flag = 1
    }else{
        flag = 0
    }
    return flag
    // let flag = 0
    // let x2 = x%10
    // let x3 = x/10
    // if(x2 == 4){
    //     flag = 1
    // }else if(x3%1 === 0){
    //     flag = 1
    // }
    // return flag
}