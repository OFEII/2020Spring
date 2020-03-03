function arrMax(arr) {
    let res = 0   
    arr.sort((a,b) => a-b)
    for (let i = 0; i < arr.length; i+2) {
        res += arr[i]
    }
    console.log(res) 
}
arrMax([1,5,7,9,4,12])
