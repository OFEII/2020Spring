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
    if(inArr.length === n+1){
        let arr =[]
        let res =[]
        for (let i = 0; i < n; i++) {
            arr[i] = inArr[i+1].split('')
            if(arr[i][0]=='+'||arr[i][arr[i].length]=='+'){
                arr[i] = 'skipped'
            }else{
                for (let j = 0; j < arr[i].length; j++) {
                    if(arr[i][j]==='+'){
                        arr[i].splice(j,1)
                    }
                    arr[i][j]= +arr[i][j]
                }
                arr[i]=sum(arr[i])
            }

            console.log(arr[i])

        }
    }
})

function sum(arr) {
    let sum =0
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i] 
    }
    return sum
}