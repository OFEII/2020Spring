// 42 和为S的两个数字
// 题目描述：
// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

// 输出描述:
// 对应每个测试案例，输出两个数，小的先输出。

// 依旧使用双指针做。此外相距最远，乘积最小。(思路和上题类似)
// 注：因为相距最远乘积最小，所以我们从两头往中间夹窗口，永远是最远的两个数，所以不用多判断乘积的情况
function FindNumbersWithSum(arr, sum){
    let plow =0
    let phigh = arr.length-1
    while (phigh>plow) {
        if(arr[plow]+arr[phigh] === sum){
            return [arr[plow],arr[phigh]]
        }else if(arr[plow] + arr[phigh] < sum){
            plow++
        }else{
            phigh--
        }
    }
    return -1
}
