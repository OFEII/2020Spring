const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let x = +inArr[0]
        console.log(f(x))
    }
})

// function factorial(n) {
//     if(n < 1){
//         return 1
//     }else{
//         return n * arguments.callee(n-1)
//     }   
// }
function f(n) {
    // a代表结果 [0]是个位依次类推
        let a = [1]
        for (let i = 1; i <= n; i++) {
            // 判断条件可以理解为为 在j大于当前被乘数的位数的时候，存在进位则强制将a扩增一个位数
            for (let j = 0, c = 0; j < a.length || c != 0; j++) {
                // 每次执行这一此循环时
                // 将进位数归0,当前位数归0,然后从当前位数开始与阶乘数i相乘
                // 用m保存相乘的结果（阶乘数*当前位数+上一位的进位数）
                // 把当前位数设置为m对10取模
                // 把c设置为进位数也就是减去当前位数再除10
                let m = (j < a.length) ? (i * a[j] + c) : c
                a[j] = m % 10
                c = (m - a[j]) / 10
            }
        }
        return a.reverse().join('')
    }