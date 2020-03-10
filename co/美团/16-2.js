// // 对于一个由0..n的所有数按升序组成的序列，我们要进行一些筛选，每次我们取当前所有数字中从小到大的第奇数位个的数，并将其丢弃。重复这一过程直到最后剩下一个数。请求出最后剩下的数字。

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let n = +inArr[0]
        let arr = [...new Array(n).keys()].slice(0)
        while(arr.length>1){
            arr = deleteOdd(arr)
        }
        console.log(+arr)

    }
})
function deleteOdd(arr){
    return arr.filter(function(cur,index){
        return index%2!==0
    })
}