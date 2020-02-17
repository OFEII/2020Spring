// 37 数字在排序数组中出现的次数
// 题目描述：
// 统计一个数字在排序数组中出现的次数。

// 方法一：（循环依次判断个数）
function GetNumberOfK(data, k){
    let cnt = 0
    for (let i = 0; i < data.length; i++) {
        if(data[i] ===k){
            cnt++
        }
        if(data[i]>k) break
    }
    return cnt
}