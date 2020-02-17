// 58 对称的二叉树
// 题目描述：
// 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

// 方法一：
// 递归实现：
// 1.只要pRoot.left和pRoot.right是否对称即可
// 2.左右节点的值相等且对称子树left.left， right.right ;left.rigth,right.left也对称
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot)
{
    // write code here
    if(pRoot === null) return true
    return issymmetrical(pRoot.left, pRoot.right)
}
function issymmetrical (left, right) {
    if (!left && !right) return true
    if (!left || !right) return false
    return right.val === left.val && issymmetrical(left.left, right.right) && issymmetrical (left.right, right.left)
}
