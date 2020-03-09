const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
function tree(p,m){
    if(p.length === 0 || !p){
        return null
    }
    let root ={
        val: p[0],
        add: 0
    }
    let idnex = m.indexOf(p[0])
    root.l = tree(p.slice(1, index+1), m.slice(0, index))
    root.r = tree(p.slice(index + 1), m.slice(index + 1))
    if (root.l != null) root.add = root.add + root.l.val + root.l.add
    if (root.r != null) root.add = root.add + root.r.val + root.r.add
    return root
}

function sum(t){
    if(!t){
        return 
    }
    sum(t.l)
    arr.push(t.add)
    sum(t.r)
}
rl.on(line, line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2){
        let l1 = inArr[0].split('').map(item => +item)
        let l2 = inArr[1].split('').map(item => +item)
        let t = tree(l1,l2)
        let arr = []
        sum(t)
    }
    console.log(arr)
})



var line1 = readline().split(' ').map(Number)
var line2 = readline().split(' ').map(Number)
 
function tree(p, m) {
    if(p.length === 0 || !p) {
        return null
    }
    var root = {
        val: p[0],
        add: 0
    }
     
    var index = m.indexOf(p[0])
    root.l = tree(p.slice(1, index+1), m.slice(0, index))
    root.r = tree(p.slice(index + 1), m.slice(index + 1))
    if (root.l != null) root.add = root.add + root.l.val + root.l.add
    if (root.r != null) root.add = root.add + root.r.val + root.r.add
    return root
}
var arr = []
var t = tree(line1, line2)
function sum(t) {
    if (!t) {
        return
    }
    sum(t.l)
    arr.push(t.add)
    sum(t.r)
}
sum(t)
print(arr.join(' '))