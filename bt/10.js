function ps(n){
    let res =[]
    let str = "()"
    for (let i = 0; i < n; i++) {
        res.push(str)
    }
}
console.log(ps(1))
console.log(ps(2))

arr = [
    '()'
]
results = [];
result = [];
doExchange(arr, 0);
function doExchange(arr, index){
    for (var i = 0; i<arr[index].length; i++) {
        result[index] = arr[index][i];
        if (index != arr.length - 1) {
            doExchange(arr, index + 1)
        } else {
            results.push(result.join(','))
        }
    }
}

console.log( results);//