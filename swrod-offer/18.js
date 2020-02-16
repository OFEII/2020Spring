// 18 二叉树的镜像
// 题目描述:
// 操作给定的二叉树，将其变换为源二叉树的镜像。

// 递归到叶子节点后逐层交换节点的值
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    if (root !== null) {
        Mirror(root.left)
        Mirror(root.right)
    } else {
        return
    }
    [root.left, root.right] = [root.right, root.left]
    return root
}