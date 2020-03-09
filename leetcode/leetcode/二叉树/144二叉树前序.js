var preorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let current = root;
    while(current || stack.length > 0) {
        while(current) {
            result.push(current.val);
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        
        current = current.right;
    }
    return result;
};
console.log(preorderTraversal([1,null,2,3]))