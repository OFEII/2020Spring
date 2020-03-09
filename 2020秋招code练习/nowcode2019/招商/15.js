const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line)
    if(inArr.length === 1){
        let t = +inArr[0] // t:目的地离你距离
        let res = 0
        let i = 0
        while (res < t || (res-t)%2 !==0) {
            res += i
            i++ 
        }
        console.log(i-1)
    }
})
// 第i层，设sum=1+2+3+...+i-1，sum为奇数，第i层所到达的范围为[-sum,sum]内的所有奇数，sum为偶数，第i层所到达的范围为[-sum,sum]内的所有偶数
// 最短步数<=>T出现的最早的一层i,条件：
// 1.T和sum同奇偶
// 2.sum≥T
// => 求出sum,retur i-1