const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let m, n ,k
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
        m = +inArr[0].split(' ')[0]
        n = +inArr[0].split(' ')[1]
    if(inArr.length === 2+m){
        let matrix=[]
        for (let i = 0; i < m; i++) {
            matrix[i] = JSON.parse(inArr[i+1]);
        }

        k = +inArr[m+1]
        console.log(matrix)

    }
})
