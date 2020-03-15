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
    if(inArr.length === n+1){
        let arr = inArr.slice(1)
        let res = []
        for (let i = 0; i < arr.length; i++) {
            let array = arr[i].split(' ')
            res.push(array)
        }
        let s = 0, temp = 0
        for (let p = 0; p < res.length; p++) {
            for (let q = p+1; q < res.length; q++) {
                for (let w = q+1; w < res.length; w++) {
                    if (res[q][0] == res[p][0] && res[q][0] == res[w][0]) {
                        temp = getArea(res[q],res[p],res[w]);
                        if (temp*100000 > s*100000) {
                            s = temp
                        }
                    }
                    if (res[q][0] != res[p][0] && res[q][0] != res[w][0] && res[p][0] != res[w][0]) {
                        temp = getArea(res[q],res[p],res[w])
                        if (temp*100000 > s*100000) {
                            s = temp
                        }
                    }
                }
            }
        }
        console.log(s)
    }
})
function getArea(a,b,c){
    let aa = Math.sqrt(Math.pow(a[1] - b[1],2) + Math.pow(a[2] - b[2],2) + Math.pow(a[3] - b[3],2))
    let cc = Math.sqrt(Math.pow(a[1] - c[1],2) + Math.pow(a[2] - c[2],2) + Math.pow(a[3] - c[3],2))
    let bb = Math.sqrt(Math.pow(c[1] - b[1],2) + Math.pow(c[2] - b[2],2) + Math.pow(c[3] - b[3],2))
    let ll = (aa + bb + cc)/2
    let ss = Math.sqrt(Math.abs(ll*(ll - aa)*(ll - bb)*(ll - cc)))
    return ss.toFixed(5)
}