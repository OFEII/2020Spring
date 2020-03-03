var maxProfit = function(p) {
    if (p.length === 0) return 0
    let profit = 0
    for (let i = 0; i < p.length-1; i++) {
        let temp = p[i+1] - p[i]
        if(temp>0){
            profit += temp
        }
    }
    return profit
  }
console.log(maxProfit([7,1,5,3,6,4]))

function distinObjectArr(arr) {
    let obj = {}
    let res = arr.reduce((cur, next) =>{
        obj[next.a] ? "" : obj[next.a] = true && cur.push(next);
        return cur
    },[])
    return res
}
console.log(distinObjectArr([
    {a: 1, b: 2},
    {a: 1, b: 2},
    {a: 1, b: 2},
    {a: 3, b: 4}, 
]))