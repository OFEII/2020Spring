const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let arr = inArr[0].split(',')
        console.log(isValidBST(arr))
    }
})
var isValidBST = function(root) {
    
    let queue = []
    function dfs(root) {
        if (!root) return
        if (root.left) dfs(root.left)
        if (root) queue.push(root.val)
        if (root.right) dfs(root.right)
    }
    
    dfs(root)
    
    for (let i = 0; i < queue.length - 1; i++) {
        if (queue[i] >= queue[i+1]) {
            return false
        }
    }
    return true
    
};
// var isValidBST = function(root, pre = null, next = null) {
//     if (!root) return true;
//     if (pre && pre.val >= root.val) return false;
//     if (next && next.val <= root.val) return false;
//     return isValidBST(root.left, pre, root) && isValidBST(root.right, root, next);
//   };
  