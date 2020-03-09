const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let n
rl.on('line',line=>{
    if(!line) return
    inArr.push(line)
    if(inArr.length === 1){
        n = +inArr[0]
    }
    if(inArr.length === n+1){
        let strArr=[]
        for (let i = 0; i < n; i++) {
            strArr[i] = inArr[i+1];
        }
        let allstrArr = permute(strArr[0])
        let set = new Set(strArr)
        let res = allstrArr.filter(item => !set.has(item))
        console.log(allstrArr)
    }
})
//字符串全排列
var permute = function(nums) {
    nums = nums.split('')
    let res = [];
    if (nums.length === 0) {
        return res;
    }
    dfs(nums, [], res);
    return res.toString();
};
function dfs(nums, cur, res) {
    if (nums.length === 0) {
        res.push(cur);
        return;
    }
    for (let i = 0; i < nums.length; i ++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        let n = nums.splice(i, 1)[0];
        arguments.callee(nums, [...cur, n], res);
        nums.splice(i, 0, n);
    }
}
  
// function permutations(s) {
//     return (s.length == 1) ? [s] : s.split('').map(
//        (e, i) => permutations(s.slice(0,i) + s.slice(i+1)).map((e2) => e+e2)
//     ).reduce((r,e) => r.concat(e)).sort().filter((e,i,a) => (i==0) || a[i-1] != e);
//   }
// console.log( permute('123'))
