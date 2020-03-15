//3.火柴 递归
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
        let nm = inArr[0].split(' ').map(e=>+e)
        let n =nm[0], k = nm[1]
        let arr = inArr[1].split(' ').map(e=>+e)
        let dig = new Map()
        dig ={
            "1":2,
            "2":5,
            "3":5,
            "4":4,
            "5":5,
            "6":6,
            "7":3,
            "8":7,
            "9":6
        }
        let d1 = []
        for (let i = 0; i < arr.length; i++) {
            d1[i] = dig[arr[i]]
        }
        let res =[]
        res = comb(d1,n)
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[i].length; j++) {
                for (let k = 0; k < d1.length; k++) {
                    if(res[i][j]==d1[k]){
                        res[i][j] = arr[k]
                        break
                    }
                }               
            }
        }
        for (let i = 0; i < res.length; i++) {
            res[i]= res[i].sort((a,b)=>b-a).join('')
        } 
        console.log(+res.sort((a,b)=>b-a)[0])
    }
})

function comb(arr,t){
    let n = arr.length
    let res = []
    let tmp = []
    let backtrack = (tmp,t,start)=>{
        if(t<0) return
        if(t==0){
            res.push(tmp)
            return
        }
        for (let i = start; i < n; i++) {
            tmp.push(arr[i])
            backtrack(tmp.slice(),t-arr[i],i)
            tmp.pop()
        }
    }
    backtrack(tmp,t,0)
    return res
}
