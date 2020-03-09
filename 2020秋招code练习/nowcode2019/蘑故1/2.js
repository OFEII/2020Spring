//穷举 字符串
// stringObject.slice(start,end)
//一个新的字符串。包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符
//-1 指字符串的最后一个字符
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line)
    if(inArr.length === 2){
        let s = inArr[0]
        let n = +inArr[1]
        let res = []
        if(s.length < n || s == '' || n<1){
            console.log(-1)
        }else{
            for (let i = 0; i <= s.length-n; i++) {
                res.push(s.slice(i,i+n))
            }
        console.log(res.join(' '))
        }
    }
})

