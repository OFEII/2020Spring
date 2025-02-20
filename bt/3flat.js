let arr = [1,[2,3],[[4],[5,6]]]
let res = arr.flat(Infinity)
let res1 = arr.toString().split(',').map(e=>+e)
let res2 = flatten1(arr)
let res3 =  flatten2(arr)

function flatten1(arr) {
    while (arr.some(item=>Array.isArray(item))) {
        arr = [].concat(...arr)
    } return arr
}

function flatten2(arr){
    return arr.reduce((res,item)=>{
        return res.concat(Array.isArray(item)?flatten2(item):item)
},[])
}


console.log(res)
console.log(res1)
console.log(res2)
console.log(res3)

var findNumberIn2DArray = function(matrix, target) {
    return matrix.map(e=>e.includes(target)).includes(true)
};
console.log(findNumberIn2DArray([],0))

var account = {
    phone: "1234567",
    getPhone: function() {
        return this.phone;
    }
};
var mycount = account.getPhone;
console.log(account.getPhone());
console.log(mycount());

