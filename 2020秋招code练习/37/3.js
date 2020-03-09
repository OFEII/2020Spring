function randomSort(arr){
    let res = arr.sort((a,b) => Math.random()>0.5 ? 1: -1)
    return res
}
console.log(randomSort([1,2,3,4,5,6,7,8,9]))