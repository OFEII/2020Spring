function FindGreatestSumOfSubArray(arr)
{
    let res = arr[0]
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max+arr[i], arr[i])
        res = Math.max(max, res)
    }
    return res
}