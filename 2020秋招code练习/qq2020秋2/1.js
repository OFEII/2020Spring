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
        let n = +inArr[0].split(' ')[0] //box number
        let m = +inArr[0].split(' ')[1] //key number
    }
    if(inArr.length === 3){
        let box = inArr[1].split(' ').map(item => +item)
        let key = inArr[2].split(' ').map(item => +item)
        let cnt = 0
        let sum = 0
        for (let i = 0; i < box.length.sqrt(); i++) {
            for (let j = 0; j < key.length.sqrt(); j++) {
                sum = box[i]+key[j]
                if(sum%2 != 0){
                    cnt++;
                    box.splice(i, 1, 0)
                    key.splice(j, 1, 0)
                }
                
            }
            
        }
        console.log(cnt)

    }
})