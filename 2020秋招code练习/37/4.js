let arr = [5, 4, 3, 2, 1]
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-1-i; j++) {
        if(arr[j] > arr[j+1]){
            swap(arr, j, j+1)
        }
    }
}
console.log(arr)
function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
}