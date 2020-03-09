const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line)
    if(inArr.length === 1){
        let x = +inArr[0]
        //解法一
        // let x = inArr[0].split('')
        // let f = ''
        // if(x[0] === '-'){
        //     f = '-'
        //     x = x.slice(1)
        // }
        // let res = x.reverse()
        // res= f + res.join('') 
        // console.log(res)
        console.log(reverse(x))

    }
})
//解法二
var reverse = function(x) {
    let arr = x.toString().split('')
    let res = parseInt(arr.reverse().join(''))
    // if(res>Math.pow(2,31)-1||-res<Math.pow(-2,31)) return 0
    return x>0? res:-res
};