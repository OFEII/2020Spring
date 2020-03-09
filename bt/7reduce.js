// reduce map
Array.prototype.map=function(callback){
    let arr = this
    return arr.reduce((acc,cur,i)=>{
        acc.push(callback(cur, i, arr))
        return acc
    },[])
}
var m = [1,2,3,4,56].map(function(v, i, arr){
    return v*v
})
console.log(m)

//reduce 
let arr = [1, 2, 3, 1, 1, 2, 3, 3, 4, 3, 4, 5]
let res = arr.reduce((acc,cur,i,arr)=>{
        !acc.includes(cur) && acc.push(cur)
        return acc
},[])

let resmin = arr.reduce((acc,cur)=>{
    return Math.min(acc,cur)
})
let resmax = arr.reduce((acc,cur)=>{
    return Math.max(acc,cur)
})
console.log(res)
console.log(resmin)
console.log(resmax)



