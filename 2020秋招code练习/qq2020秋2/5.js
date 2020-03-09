const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
 
let inArr = []
rl.on('line',line=>{
  if(!line) return
  inArr.push(line)
  if(inArr.length === 1){
    let n = +inArr[0].trim() // n :auction cnt
  }
  if(inArr.length === n+2){
    let q = +inArr[n+1].trim() // q:query cnt
  }
  if(inArr.length === 2+n+q){
      let n = +inArr[0].trim()
      let q = +inArr[n+1].trim()
      let res = []
      for (let i = 0; i < n; i++) {
        let a = +inArr[i+1].split(' ')[0] //公司编号
        let b = +inArr[i+1].split(' ')[1] //竞拍价格
        for (let j = 0; j < q; j++) {
            let del = inArr[i+n+2].split(' ').map(item => +item) //去除公司的number+编号
            let delNum = del[0] //去除公司的number
            let delCom = del.splice(0,1)
            for (let k = 0; k < delCom.length; k++) {
                if(delCom[k] === a[n]){
                    
                }
            }
            res
        }          
      }
      console.log(res)
  }
   
})