const o = {  
    a:{
        b:{
        c:1    
    }  
}}
function get(o,target) {
    // return eval('o.'+target)
    let key = target.split('.')
    let res = o
    key.map(val=>res=res[val])
    return res
}
// get(o)  //1
console.log(get(o,'a.b.c'))
