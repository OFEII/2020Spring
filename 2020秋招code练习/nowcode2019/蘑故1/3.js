//链表
// 1.arr1.concat(arr2)
// 2.[...arr1,...arr2]
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line)
    if(inArr.length === 2){
        let list1 = inArr[0].split(' ').map(e => +e)
        let list2 = inArr[1].split(' ').map(e => +e)
        // let res = list1.concat(list2)
        let res = [...list1, ...list2]
        res.sort((a,b) =>a-b)
        console.log(res.join(' '))
    }
})