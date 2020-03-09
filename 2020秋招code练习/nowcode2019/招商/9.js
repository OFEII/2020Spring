//贪心
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2){
        let people = inArr[0].split(' ').map(e => +e) //peoplr: 参与漂流的人员对应的体重数组
        let limit = +inArr[1] //漂流船承载的最大重量
        let cnt = 0
        people.sort((a,b) => a-b)
        let i = 0
        let j = people.length-1
        while(j > i){
            if(people[i]+people[j]<= limit){
                i++
                j--
            }else{
                j--
            }
            cnt++
        }
        console.log(cnt +(j==i?1:0))
    }
})