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