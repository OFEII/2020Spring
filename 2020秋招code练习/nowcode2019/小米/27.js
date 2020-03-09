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
        let cards = inArr[0].split(' ')
        let a = cards[0], b = cards[1], c = cards[2], d = cards[3]
        let m = +inArr[1]
        console.log(fun2(a,b,c,d))

        function fun(a,b,c,d) {
            return Boolean((a + b + c + d == m) || (a + b + c - d == m) || (a + b + c * d == m) || (a + b + c / d == m)
            || (a + b - c + d == m) || (a + b - c - d == m) || (a + b - c * d == m) || (a + b - c / d == m)
            || (a + b * c + d == m) || (a + b * c - d == m) || (a + b * c * d == m) || (a + b * c / d == m)
            || (a + b / c + d == m) || (a + b / c - d == m) || (a + b / c * d == m) || (a + b / c / d == m)
            || (a - b + c + d == m) || (a - b + c - d == m) || (a - b + c * d == m) || (a - b + c / d == m)
            || (a - b - c + d == m) || (a - b - c - d == m) || (a - b - c * d == m) || (a - b - c / d == m)
            || (a - b * c + d == m) || (a - b * c - d == m) || (a - b * c * d == m) || (a - b * c / d == m)
            || (a - b / c + d == m) || (a - b / c - d == m) || (a - b / c * d == m) || (a - b / c / d == m)
            || (a * b + c + d == m) || (a * b + c - d == m) || (a * b + c * d == m) || (a * b + c / d == m)
            || (a * b - c + d == m) || (a * b - c - d == m) || (a * b - c * d == m) || (a * b - c / d == m)
            || (a * b * c + d == m) || (a * b * c - d == m) || (a * b * c * d == m) || (a * b * c / d == m)
            || (a * b / c + d == m) || (a * b / c - d == m) || (a * b / c * d == m) || (a * b / c / d == m)
            || (a / b + c + d == m) || (a / b + c - d == m) || (a / b + c * d == m) || (a / b + c / d == m)
            || (a / b - c + d == m) || (a / b - c - d == m) || (a / b - c * d == m) || (a / b - c / d == m)
            || (a / b * c + d == m) || (a / b * c - d == m) || (a / b * c * d == m) || (a / b * c / d == m)
            || (a / b / c + d == m) || (a / b / c - d == m) || (a / b / c * d == m) || (a / b / c / d == m))
        }
        function fun2(a,b,c,d) {
            if (fun(a, b, c, d) || fun(a, b, d, c) || fun(a, c, b, d)
                || fun(a, c, d, b) || fun(a, d, b, c) || fun(a, d, c, b)
                || fun(b, a, c, d) || fun(b, a, d, c) || fun(b, c, a, d)
                || fun(b, c, d, a) || fun(b, d, a, c) || fun(b, d, c, a)
                || fun(c, a, b, d) || fun(c, a, d, b) || fun(c, b, a, d)
                || fun(c, b, d, a) || fun(c, d, a, b) || fun(c, d, b, a)
                || fun(d, a, b, c) || fun(d, a, c, b) || fun(d, b, a, c)
                || fun(d, b, c, a) || fun(d, c, a, b) || fun(d, c, b, a))
        {
            return 1
        }else{
            return 0
        }
            
        }
    }
})