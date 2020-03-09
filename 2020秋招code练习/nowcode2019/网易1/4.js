//出门面朝北，let directionArr = ["N","E","S","W"]
//遍历turn， turn[i]='R' =>cnt++
//return directionArr[cnt取模]
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let inArr = []
rl.on('line',line=>{ 
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length == 2){
        let directionArr = ["N","E","S","W"],
            turn = inArr[1],
            cnt = 0
        for (let i = 0; i < turn.length; i++) {
            turn[i]=='R'? cnt++ :cnt--
        }
        // 负数取模：先化为正数取模再取反N-0 E-1 S-2 W-3
        cnt = (cnt%4+4)%4;
        console.log(directionArr[cnt%4])  
    }
})
