//贪心
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let a =[]
let n
rl.on('line',line=>{
    if(!line) return
    inArr.push(line)
    n = +inArr[0]
    if(inArr.length === n+1){
        for (let i = 0; i < n; i++) {
            a[i] = inArr[i+1].split(' ').map(item => +item)
        }
        let res = 0
        for (let j = 0; j < n; j++) {
            if(cover(a[j][0], a[j][1], j+1)){
                res++
            }
        }
        console.log(res)
    }
})

function cover(l,r,t) {
    if(l==r)
      return false
    if (t >= n)
        return true
    if (a[t][0] <= l && r <= a[t][1])      // （l,r)被第t张海报完全覆盖
        return false;
    else if (a[t][0] >= r || a[t][1] <= l)  //（l,r)和第t张海报不交叠
        return cover(l, r, t + 1);//与当前海报不相交，就递归与下一个比较
    else if (l <= a[t][0] && a[t][1] <= r) //当前海报，将其他海报包裹
        return cover(l, r, t + 1);
    else if (l < a[t][1] && a[t][1] < r)
        return cover( a[t][1], r, t + 1) //海报前部分被覆盖
    else if (l < a[t][0] && a[t][0] < r)
        return cover( l, a[t][0], t + 1) //海报后部分被覆盖
    return false//所有情况都考虑到了，此句不需要；删除此句有时会编译不通过   
}