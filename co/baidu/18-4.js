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
        let patt = "^";
        for (let i = 0; i < s2.length; i++) {
            if (s2[i] == "?") {
                patt += "."
            } else {
                patt += s2[i]
            }
        }
        let res = new RegExp(patt)
        let set = new Set()
        while (s1.length > 0) {
            let child = s1.match(res)
            if (child) {
                set.add(child[0])
            }
            s1 = s1.substr(1)
        }
        console.log(set.size)
    }
})

