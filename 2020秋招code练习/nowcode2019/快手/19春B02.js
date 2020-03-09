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
        let n = +inArr[0]
        let res = f(n)
        let arr = res.toString().split('').map(e => +e).reverse()
        let lastNum = 0
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] !== 0){
                lastNum = arr[i]
                break
            }
        }
        console.log(res)
    }
})
function f(n) {
        let a = [1]
        for (let i = 1; i <= n; i++) {
            for (let j = 0, c = 0; j < a.length || c != 0; j++) {
                let m = (j < a.length) ? (i * a[j] + c) : c
                a[j] = m % 10
                c = (m - a[j]) / 10
            }
        }
        return a.reverse().join('')
    }

// function factorial(n) {
//     if(n<1) return 1
//     else{
//         return n * arguments.callee(n-1)
//     }
// }