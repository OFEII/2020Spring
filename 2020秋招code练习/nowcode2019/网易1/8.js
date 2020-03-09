const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let inArr = []
rl.on('line', line => {
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2) {
        let n = +inArr[0].split(' ')[0]//零食的数量
        let w = +inArr[0].split(' ')[1]//背包的容量
        let snackArr = inArr[1].split(' ').map(item => +item)
        let snackSum = snackArr.reduce((acc, cur) => acc+cur,0)
        if(snackSum <= w) {
            console.log(2**n)//Math.pow(2,n)
        }else {
            console.log(f(n - 1,w))
        }
        function f (i, restW) {
            if(restW <= 0) {
                return 0
            }
            if(i === 0) {
                if(snackArr[i] > restW) {
                    return 1
                }
                else {
                    return 2
                }
            }
            return f(i-1, restW - snackArr[i]) + f(i-1, restW)
        }
         
    }
})