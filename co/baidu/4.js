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
        let n = +inArr[0]
        let arr1 = inArr[1].split(' ').map(e=>+e)
        let arr2 = inArr[1].split(' ').map(e=>+e)
        arr2.sort((a,b)=>a-b)//排好序的数组
        let cnt = 0
        let j = 0
        for (let i = 0; i < n; i++) {
            if(arr1[i] === arr2[j]){//统计多少是从小到大排好序的,不管次序
           count++;
                cnt++
                j++
            }
        }
        console.log(cnt)
    }
})