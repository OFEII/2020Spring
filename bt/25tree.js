function TreeNode (val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
 
function vist(root) {
    if (root) {
        vist(root.left);
        vist(root.right);
        console.log(root.val);
    }
}