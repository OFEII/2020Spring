//leetcode20  vaild []
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
        let arr = inArr[0].split('')
        console.log(isValid(arr))

    }
})
var isValid = function(s) {
    let map = {
        '(':-1,
        ')':1,
        '{':-2,
        '}':2,
        '[':-3,
        ']':3
    }
    let stack = [] 
    for(let i=0;i < s.length;i++){ 
        if(map[s[i]] < 0){ 
            stack.push(s[i]) 
        }else { 
            let last = stack.pop() 
            if(map[last] + map[s[i]] != 0){ 
                return false
            }
        }
    }
    if(stack.length > 0) return false 
    return true 
};