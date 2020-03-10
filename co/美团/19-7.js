const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let n
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    n = +inArr[0]
    if(inArr.length === 3*n+1){
        for (let i = 0; i < 3*n-2; i+=3) {
            let s = +inArr[i+1]
            let ndxy = inArr[i+2].split(' ').map(e=>+e)
            let t012 = inArr[i+3].split(' ').map(e=>+e)
            let [n,d,x,y] =ndxy
            let [t0,t1,t2] = t012
            console.log(getCoin(s,n,d,x,y,t0,t1,t2))
            // console.log(n,d,x,y)
            // console.log(t0,t1,t2)

        }
    }
})
function getCoin(s,n,d,x,y,t0,t1,t2) {
    let time = 0
    while(s > 0) {
        if(time % t0 == 0) {
            s -= n * d
            if(s <= 0) return "NO"
        }
        if(time % t1 == 0) {
            s -= y
            if(s <= 0) return "YES"
        }
        if(time % t2 == 0) {
            s -= x
            if(s <= 0) return "YES"
        }
        time++;
    }
    return "NO";
}