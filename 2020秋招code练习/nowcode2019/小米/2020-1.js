const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let n
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    n = +inArr[0]
    if(inArr.length === n+1 ){
        let arr = []
        let sum1 = 0
        let sum2 = 0
        for (let i = 0; i < n; i++) {
            arr[i] = inArr[i+1].split(' ').map(e => +e)
            for (let j = 0; j < n-1; j++) {
                if(arr[i][j] === arr[i][j+1]){
                    arr[i][j] = arr[i][j+1] +arr [i][j]
                    arr[i][j+1] = 0
                }    
            }
            moveZeroes(arr[i])
        }
        for (let i = 0; i < n; i++) {
            console.log(arr[i].join(' '))
            
        }


    }
})
var moveZeroes = function(n) {
    let cnt = n.length
    let i = 0
    while(cnt > 0){
        cnt--
        if(n[i] === 0){
            n.splice(i,1)
            n.push(0)
        }else{
            i++
        }
    }
}
