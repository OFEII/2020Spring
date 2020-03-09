//遍历一次 i%3==0 => cnt++
//return cnt
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let inArr = []
rl.on('line',function(line){
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1) {
        let start = +inArr[0].split(' ')[0]
        let end = +inArr[0].split(' ')[1]
        let cnt = 0
        for (let i = start; i <=end; i++) {
            if(i%3 == 0){
                cnt++
            }
        }
        console.log(cnt)

    }          
})
