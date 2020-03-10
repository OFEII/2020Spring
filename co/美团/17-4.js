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
        let s1 = inArr[0]
        let s2 = inArr[1]
        let arr = [s1,s2]
        console.log(longestCommonPrefix(arr).length)


    }
})
var longestCommonPrefix = function(strs) {
    strs.sort()
    if(!strs.length) return''
    let first = strs[0], end =strs[strs.length-1]
    if(first === end||end.match(eval(`/^${first}/`))){
        return first
    }
    for(let i =0;i<first.length;i++){
        if(first[i]!==end[i]){
            return first.substring(0,i)
        }
    }
};