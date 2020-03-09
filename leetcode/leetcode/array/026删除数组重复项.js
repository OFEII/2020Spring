// 1.双指针 
// 创建一个新的数组，当遇到旧数组的指针与当前数值指针值不一致时，赋值给新的数组。双指针的方法是巧妙的用一个数组代替了两个数组赋值的方式
var removeDuplicates = function(nums) {
    let len = nums.length
    if(len === 0)
    return 0
    let j =0
    for (let i = 0; i < len; i++) {
        if(nums[i] !== nums[j]){
            j++
            nums[j] = nums[i]
        }
    }
    return j+1
};
// 2.js arrary 的 splice 方法
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        while (nums[i] === nums[j]) {
            nums.splice(j, 1);
        }
    }
    return nums.length;
};

// 注意是原地算法，数组长度是会变动的，所以定义一个变量存储数组长度
// 原地算法，就是不依赖额外的资源或者依赖少数的额外资源，仅依靠输出来覆盖输入的一种算法操作
