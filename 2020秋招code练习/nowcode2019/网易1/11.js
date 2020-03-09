const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
 
let inputArr = []
rl.on('line',line=>{
  if(!line) return
  inputArr.push(line.trim())
  if(inputArr.length === 4){
      let n = +inputArr[0]
      let m = +inputArr[2]
      let appleArr = inputArr[1].split(' ').map(e => +e) // appleArr，表示从左往右数第appleArr[i]堆有多少苹果 -arr
      let queryArr =inputArr[3].split(' ').map(e => +e) // queryArr,查询第queryArr[i]个苹果的位置
      for (let i = 1; i <=n; i++) {
          appleArr[i] += appleArr[i-1]
      }
      queryArr.forEach(i => {
          let res = search(i,appleArr,0,appleArr.length-1)+1
          console.log(res)
      })
  }
   
})
// 有序的二分查找，递归实现
function search(tag, arr, start, end) {
    if (tag <= arr[0]) {
        return 0
    }
    let mid = parseInt((start + end) / 2)
    if (end - start <= 1) {
        return end
    }
    if (tag < arr[mid]) {
        return search(tag, arr, start, mid)
    } else if (tag > arr[mid]) {
        return search(tag, arr, mid, end)
    } else {
        return mid
    }
}