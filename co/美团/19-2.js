const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2){
        let nk = inArr[0].split(' ').map(e=>+e)
        let n = nk[0], k = nk[1]
        let arr = inArr[1].split(' ').map(e=>+e)
        let i = 0, j =0, res =0
        while(j<n){
            if(arr[j]==1){
                j++
            }else if(k>0){
                k--
                j++
            }else{
                res =Math.max(res,j-i)
                while(i<j && arr[i]==1){
                    i++
                }
                j++
                i++
            }
        }
        res = Math.max(res,j-i)
        console.log(res)
    }
})