//1 数组api
// 定义 nums[0...i] 满足每个元素最多出现两次，遍历整个数列不断的维护这个定义
var removeDuplicates = function(nums) {
    let i = 0
    while (i < nums.length) {
      if (nums[i] === nums[i - 2]) {
        nums.splice(i, 1)
      } else {
        i++
      }
    }
  };
//   双指针
// 维护两个指针，

// 慢指针 p1 初始为 0 ，快指针 p2 初始为 1
// 如果快指针的后一位 (p2 + 1) 和前一位( p1 )都相同，那说明该元素出现三次。
// 出现三次把快指针 p2 下元素原地删除，快指针不变，继续比较
// 如果快指针和慢指针不相同，说明之前的数字都是最多出现两次的，把慢指针 p1 改为当前不同的数字下标，也就是快指针 p2

  var removeDuplicates = function(nums) {
      let p1 = 0, p2 = 1
      while (p2 < nums.length) {
          if(nums[p2] == nums[p1]&&nums[p2 + 1] == nums[p1]){
              nums.splice(p2,1)
          }else if(nums[p2] !== nums[p1]){
              p1 = p2
              p2++
          }else{
              p2++
          }
      }
  };
  
