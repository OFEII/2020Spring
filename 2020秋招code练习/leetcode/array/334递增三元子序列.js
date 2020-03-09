//leetcode 334
// 判断一个无序数组中是否存在长度为3的递增子序列。（不要求连续）（满足O(n)的时间复杂度和O(1)的空间复杂度。）
var increasingTri = function (nums) {
    let i =0
    //Math.pow(2, 53) JS 能够准确表示的整数范围在-2^53到2^53之间
    let small = Number.MAX_SAFE_INTEGER
    let big = Number.MAX_SAFE_INTEGER
    while (i < nums.length) {
        if(nums[i]<small){
            small = nums[i]
            sIndex = i
        }else if (nums[i]>small && nums[i]<=big){
            big = nums[i]
        }else if(nums[i] >big){
            return true
        }
        i++
    }
    return false
}
console.log(increasingTri([12,8,36,9,20]))