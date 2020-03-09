// 贪心算法
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2){
        let n = +inArr[0] // redbag total
        let d = inArr[1].split(' ').map(item => +item) //d[i]
        let i = 0,
            j = n-1,
            max = 0,
            left = d[0],
            right = d[n-1]
        while( j> i){
            if(left > right){
                j --
                right +=d[j]
                continue
            }
            if(left < right){
                i++
                left +=d[i]
                continue
            }
            if(left == right && i != j){
                max = Math.max(left,max)
                j--
                i++
                left +=d[i]
                right +=d[j]
                continue
            }
        }
        console.log(max)
    }
})



