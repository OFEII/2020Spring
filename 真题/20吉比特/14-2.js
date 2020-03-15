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
        let arr = rp(['A','B','C','D'],n)
        let res = []
        for (let i = 0; i < arr.length; i++) {
            let cnta = 0
            let cntc = 0
            for (let j = 0; j < arr[i].length; j++) {
                if(arr[i][j] === 'A') cnta++
                if(arr[i][j] === 'C') cntc++
            }
            if((cnta+cntc)%2==0){
                res.push(arr[i])
            }

        }
        console.log(res.length)
    }
})
function rp(arr, count) {
    let res = []
    let cal = function(r, a, c) {
        if (c == 0) {
            res.push(r)
            return
        }
        for (let i = 0; i < a.length; i++) {
            cal(r.concat(a[i]), a.slice(0, i + 1).concat(a.slice(i + 1)), c - 1)
        }
    }
    cal([], arr, count)
    return res
}