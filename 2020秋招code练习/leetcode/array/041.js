var firstMissingPositive = function(nums) {
    let n = nums.length
    for (let i = 0; i <= n + 1; i++) {
        if(nums[i] <= 0 ||!nums[i]){
            nums[i] = n+1
        }
    }
    for (let i = 0; i < n; i++) {
        let a = Math.abs(nums[i])
        nums[a] = -Math.abs(nums[a])
    }
    for (let i = 1; i <= n + 1; i++) {
        if (nums[i] > 0) return i
    }
    
};