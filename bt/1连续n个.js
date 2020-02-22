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
        let numArr = inArr[0].split(',').map(e=>+e)
        let n = +inArr[1]
        let res = findN(n)
        let flag
        for (let i = 0; i < res.length; i++) {
            if(numArr.find(item => res[i].includes(item))){
                flag = true
            }else {
                flag = false
            }
        }
        console.log(flag)
    }
})

function findN(sum) {
    let winLow = 1,winHigh = 2,res = []
    while (winLow<winHigh) {
        let curSum = (winHigh+winLow)*(winHigh-winLow+1)/2
        if(curSum === sum){
            let list = []
            for (let i = winLow; i <=winHigh ; i++) {
                list.push(i)
            }
            res.push(list)
        }
        curSum < sum? winHigh++: winLow++
    }
    return res
    
}