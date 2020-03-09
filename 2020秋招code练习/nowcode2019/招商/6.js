// // 贪心 排序
// let g = readline().split(' ').map(e => +e).sort((a, b) => b - a) //g:每个孩子的胃口值
// let s = readline().split(' ').map(e => +e).sort((a, b) => b - a)//s:每个糖果的尺寸
// let cnt = 0
// let [i,j] = [0,0]
// while(i < g.length && j< s.length){
//     if(s[j] >= g[i]){
//         cnt++
//         i++
//         j++
//     }else{
//         i++
//     }
// }
// console.log(cnt)

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr =[]
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2){
        let g = inArr[0].split(' ').map(item => +item).sort((a, b) => b - a)
        let s = inArr[1].split(' ').map(item => +item).sort((a, b) => b - a)
        let cnt = 0
        let [i,j] = [0,0]
        while(i < g.length && j< s.length){
            if(s[j] >= g[i]){
                cnt++
                i++
                j++
            }else{
                i++
            }
        }
    console.log(cnt)
    }
})