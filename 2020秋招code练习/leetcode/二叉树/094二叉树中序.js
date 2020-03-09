var inorderTraversal = function(root) {
    var res = [], stack = []
    while(root || stack.length) {
        if(root.left) {
            stack.push(root)
            root = root.left
        }else if(!root.left && !root.right) {
            res.push(root.val)
            root = stack.pop()
            // 这里等价于：if(root) root.left = null
            root && (root.left = null)
        }else if(root.right) {
            res.push(root.val)
            root = root.right
        }
    }
    return res
};
console.log(inorderTraversal(1))