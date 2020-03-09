//单位转换 遍历数组  clockArr[j]> 上课时间schoolTimeMax - 赶路时间x
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    let len = inArr.length
    let n = +inArr[0] //n: alarm number 
    if(len == n+3){
        let x = inArr[len-2]  //x: 起床到教室需要X(0<=X<=100)分钟
        let schoolTime = inArr[len-1].trim().split(' ') //schoolTime:上学时间(h,m)
        let schoolTimeMax = +(schoolTime[0])*60 + +(schoolTime[1])
        let clockArr = []; //clockArr: n行 data
        //遍历 n行闹钟数的 data
        for(let i=0;i<n;i++){
            let clock = inArr[i+1].trim().split(' ')
            clockArr[i] = +(clock[0])*60 + +(clock[1])
        }
        clockArr.sort((a,b)=>a-b)
        for(let j=clockArr.length-1;j>=0;j--){
            if(clockArr[j] > (schoolTimeMax-x)) continue
            else {
                console.log(Math.floor(clockArr[j] / 60), clockArr[j] % 60)
                break
            }
        }
    }
})
