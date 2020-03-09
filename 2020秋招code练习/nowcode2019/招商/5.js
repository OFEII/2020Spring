//dp 
// let n =2
let n = +readline()
let arr = [1, 1]
if(n<2){
    console.log(n) 
}
for (let i = 2; i <=n; i++) {
    arr[i] = arr[i-1]+arr[i-2]
}
console.log(arr[n]) 