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
        let n = +inArr[0]
        let arr = inArr[1].split(' ').map(e=>+e)
        let res = maxArea(arr)
        console.log(res)

    }
})
var maxArea = function(h) {
    let area = 0
    for(let i =0,j=h.length-1;i<j;){
        area = Math.max(area,(j-i)*(h[i]<h[j]?h[i++]:h[j--]))
        
    }
    return area
};