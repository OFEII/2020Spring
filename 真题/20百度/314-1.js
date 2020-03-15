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
        let arr = inArr[1].split(' ').map(e=>+e)
        let map = new Map()
        let cnt = 0
        for (let i = 0; i < arr.length; i++) {
            if(map.has(arr[i])){
                map.set(arr[i],map.get(arr[i])+1)
            }else{
                map.set(arr[i],1)
            }
        }
        for(let [k,v] of map){
            if(v%2==0){
                cnt = cnt+v/2
            }else{
                cnt += (v-1)/2 +1
            }
        }
        console.log(cnt)
    }
})
