// 时间复杂度O(N)
// y =>[k+1,n] res=n/y*(y-k)
// n%i-k>=0 ? res+n%i-k+1:res
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let res = 0
rl.on('line',line =>{
    let n = +line.split(' ')[0],
        k = +line.split(' ')[1]
    if(k === 0){
        res = n*n
        console.log(res)
        return
    }
    //x=[1,n] y=[k,n] 遍历y,满足条件x的总数为(n/y)*(y-k)
    for (let i = k+1; i <= n; i++) {
        let cnt = Math.floor(n/i)
        let restLen = n%i
        res += cnt * (i-k)
        restLen >=k ? res += restLen-k+1: res
    }
  console.log(res)
})

// x可以在 [1, n] 上取，但是y只能在 [k, n]上取，因为k以下都不存在大于等于k的余数。
// 所以遍历y，对于每一个y，统计符合的x的个数，加到cnt里。

// 先假设x可以从 [0, n]中取值，那么这段区间至少可以分成(n/k)个完整的、长度为y的区间。
// x = 【0，1……y-2，y-1】【y，y+1，……，2y-2，2y-1】……【……】……【……，n】
// 在每个小区间a上，第i个数a[i]%y的余数是i。这样每一小段上大于等于k的x有y-k个（显然当k=0时，y个数都满足题意）。
// 【0，1，……，k，k+1，……，y-1】

// 这样，已经遍历的总数是(n/y)*y，而其中满足条件的x的总数是（n/y）*（y-k）
// 因为n = (n/y)*y + n%y
// 所以还没遍历的数有 n+1-(n/y)*y = n+1 - (n - n%y) = 1+n%y 个，令它为t。
// 因为n%y∈[0, y-1]， 则t∈[1, y]。

// 也就是说我这种方法，至少剩了一个数，至多会把一个整区间（数量为y）都剩下来。
// 但是无论如何，这个区间last的第i个数last[i]%y一定是i。则最后一个数（n）的余数就是n%y。
// 如此一来，此区间内从 [k,n%y] 包含共计 n%y-k+1 个数。不过如果算出小于0的数，则不需要减回去，直接当没有就可以了。
// 所以最后一个区间里包含了 max(n%y-k+1, 0) 个满足条件的x。

// 最后注意，这里实际上枚举了x∈ [0, n]所有的数字，当k==0的时候，多统计了一个0，必须减掉。