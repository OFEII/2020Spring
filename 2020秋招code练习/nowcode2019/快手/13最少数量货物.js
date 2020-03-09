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
        goodsMin(x)
    }

})
function goodsMin(x) {
    for (let i = ~~(x/7); i >= 0; i--) {
        for (let j = ~~((x-i*7)/5); j >= 0; j--) {
            if((x-i*7-j*5) % 3 == 0){
                console.log(i+j+ ~~((x-i*7-j*5)/3))
                return 
            }  
        }
    }
    console.log(-1)
}