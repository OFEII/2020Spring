// jsnode多行输入输出
//遍历路灯字符串'.'=>cnt++ i+=3 'X'=>i++
// return cnt
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = [],t
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        t = +inArr[0]     
    }
    if(inArr.length === 1+2*t){
        for (let i = 0; i < t; i++) {
            const n = +inArr[i*2+1]
            const roads = inArr[i*2+2].split('')
            console.log(needLamp(n,roads))
        }
    }
    function needLamp(n ,roads) {
        let cnt = 0
        let i = 0
        while (i<n) {
            if(roads[i]==='.'){
                cnt++
                i+=3
            }else{
                i++
            }
        }
        return cnt
    }
})
