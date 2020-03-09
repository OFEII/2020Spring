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
        let cnt = 0
        for (let i = 0; i < n; i++) {
            arr[i] = +inArr[i+1]
        }
        let sortArr = arr.sort((a,b) => a-b)
        for (let i = 0; i < n; i++) {
            for (let j = i+1; j < n; j++) {
                if(sortArr[i]>sortArr[j]){
                    let temp = sortArr[i]
                    sortArr[i] = sortArr[j]
                    sortArr[j] = temp
                }
            }
        }
        for (let i = 0; i < n; i++) {
            if(arr[i] == sortArr[cnt]){
                cnt ++
            }
            
        }

    }
    console.log(n-cnt)
})

// function swap(arr, i, j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]]
// }        // select sort
//         for (let j = 0; j < arr.length; j++) {
//             let minIndex = j
//             for (let i = j; i < arr.length; i++) {
//               if (arr[minIndex] > arr[i]) {
//                 minIndex = i
//               }
//             }
//             if (minIndex !== j) {
//               swap(arr, j, minIndex)
//               cnt++
//             }
//           }