// 38 二叉树的深度
// 题目描述：
// 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

// 方法一：
// 递归实现（层序遍历）
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    // write code here
    if (pRoot === null) return 0
    let leftDeep = TreeDepth(pRoot.left) + 1
    let rightDeep = TreeDepth(pRoot.right) + 1
    return Math.max(leftDeep, rightDeep)
}
