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
        let str = inArr[0].split('')
        console.log(keymap(str))
       

    }
})
function keymap(str) {
    let map= {
        a:'bcd',
        b:'123',
        c:'def',
        d:'321',
        e:'11',
        f:'d',
        g:'hf',
        h:'2'
    }
    let res=[]
    let flag = true 
    for (let j = 0; j < str.length; j++) {
       for(let i in map){
           if(str[j] == i){
               flag =false
               res += map[i]
           }    
        } 
    }
    return res
   
}
