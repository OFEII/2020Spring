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
        let arr  = inArr[0].split(' ').map(e => +e)
        console.log(findRepeat(arr))
        //解法一 排序比较
        // let res = {}
        // for (let i = 0; i < arr.length; i++) {
        //     if(!res[arr[i]]){
        //         res[arr[i]] = 1
        //     }else{
        //         console.log(arr[i])
        //         break
        //     }
        // }
    }
})
//解法二 Set()
function findRepeat(arr) {
    const set = new Set()
    for (let i = 0; i < arr.length; i++) {
        if(set.has(arr[i])) return arr[i]
        set.add(arr[i])
    }
    return 0 
}