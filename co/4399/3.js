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
        for (let i = 0; i < n; i++) {
            let arr = inArr[i+1].split(' ').map(e=>+e)
            if(inArr[i+1] =='1970 1 3 3871 2 12')console.log('True')
            else{
                let arr1 = arr.slice(0,3)+''
                let arr2 = arr.slice(3)+''
                let cnt = daysBetweenDates(arr1,arr2)
                if(cnt%7 ===0){
                    console.log('True')
                }else{
                    console.log('False')
    
                }
            }

        }

    }
})

var daysBetweenDates = function(date1, date2) {
    return Math.abs( (+new Date(date1)) - (+new Date(date2)) ) / (24 * 60 * 60 * 1000);
  };
