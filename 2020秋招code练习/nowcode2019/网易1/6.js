const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 5){
        let n = +inArr[0]
        let x1 = inArr[1].split(/\s+/).map(e=>+e)
        let y1 = inArr[2].split(/\s+/).map(e=>+e)
        let x2 = inArr[3].split(/\s+/).map(e=>+e)
        let y2 = inArr[4].split(/\s+/).map(e=>+e)
        console.log(cross(n,x1,y1,x2,y2))
    }
})
function cross(n, x1, y1, x2, y2) {
    let max = 0
    for(let i=0;i<n;i++) {
      for(let j=0;j<n;j++) {
        let temp = 0
        let x = x1[i]
        let y = y1[j]
        for(let k=0;k<n;k++) {
          if(x>=x1[k]&&x<x2[k]&&y>=y1[k]&&y<y2[k]) {
            temp++
          }
        }
        max = Math.max(max, temp)
      }
    }
    return max
  }
  