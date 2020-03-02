// leetcode 1360 daysbetweenDate
// 绝对值（时间戳相减） / 每天的毫秒数
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
        let str = inArr[0]
        let year = inArr[0].split('-').map(e=>+e)[0]
        let baseYear = year+'-01-01'
        let res = daysBetweenDates(str,baseYear)
        console.log(res+1)

    }
})
var daysBetweenDates = function(date1, date2) {
    return Math.abs( (+new Date(date1)) - (+new Date(date2)) ) / (24 * 60 * 60 * 1000);
  };
