const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let arr = inArr[0].split(' ').map(e=>+e)
        let a = arr[0]
        let b = arr[1]
        let res =countPrimes(a,b)
        console.log(res)
  

    }
})

var countPrimes = function(a,b) {
    var count = 0;
    for (let i = a; i < b+1; i++) {
        if (isPrime(i)) {
            count++
        }
        
    }

    // 判断是否是质数
    function isPrime(k) {
        if (k === 1) {
            return false
        }
        for(let i = 2; i < k; i++) {
            if (Number.isInteger(k/i)) {
                return false
            }
        } 
        return true   
    }
    return count; 
};
var permute = function(innum){
    let nums =innum.toString().split('').map(e=>+e)
    nums.sort((a,b)=>a-b)
    let temp =[],list =[]
    let one = (list,who,start)=>{
        if(list.length == nums.length){
            temp.push(list)
            return 
        }
        for (let i = 0; i < who.length; i++) {
            if(start.indexOf(i)<0){
                list.push(who[i])
                start.push(i)
                one(list.slice(),who,start)
                start.pop()
                list.pop()
                while (who[i+1]===who[i]) {
                    i++
                }
            }
        }
    }
    one(list,nums.slice(),[])
    return temp.map(e=>e.join('')).map(e=>+e)
}
console.log(permute(123))