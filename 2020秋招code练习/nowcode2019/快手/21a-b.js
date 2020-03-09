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
        let arr = inArr[0].split(' ').map(e => +e)
        let a = arr[0], b = arr[1]
        if(a%b === 0) {
            console.log(a/b)
        } else {
            let decimal = []
            let map = {}
            let tmp = a%b
            let loopPos = -1;
            while(tmp != 0) {
                if (map.hasOwnProperty(tmp)) {
                    loopPos = map[tmp]
                    break;
                } else {
                    map[tmp] = decimal.length
                    decimal.push(parseInt(tmp*10/b))
                    tmp = tmp * 10 % b
                }
            }
            if (loopPos === -1) {
                console.log(parseInt(a/b) + '.' + decimal.join(''))
            } else {
                let s1 = decimal.join('').slice(0, loopPos)
                let s2 = decimal.join('').slice(loopPos)
                console.log(parseInt(a/b) + '.' + s1 + '(' + s2 + ')')
            }
        }      
    }
})