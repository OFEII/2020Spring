const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})

let inputArr = []
rl.on('line',line=>{
    if(!line) return
    inputArr.push(line.trim())
    if(inputArr.length === 3){
        let n = +inputArr[0].split(' ')[0] //这堂课持续n分钟
        let k = +inputArr[0].split(' ')[1] //叫醒小易一次使他能够保持清醒的时间k
        let rate = inputArr[1].split(' ').map(item => +item) // 小易对每分钟知识点的感兴趣评分-arr
        let status = inputArr[2].split(' ').map(item => +item)
        let res = 0
        for (let i = 0; i < n; i++) {
            if(status[i] === 1){
                res = res + rate[i]
            }
        }
        let ans = 0
        let max = 0
        let temp = 0 //0-k 叫醒获得的res
        for (let i = 0; i < k; i++) {
            if(status[i] === 0){
                temp = temp + rate[i] 
            }
        }
        max = temp

        for (let i = k; i < n; i++) {
            if(status[i] === 0){
                temp = temp + rate[i]
            }
            if(status[i-k] === 0){
                temp = temp - rate[i-k]
            }
            max = Math.max(max,temp)
        }
        ans = max + res
        console.log(ans)
    } 
})
