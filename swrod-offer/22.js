// 22 从上往下打印二叉树（层序遍历）
// 题目描述：
// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

// 二叉树的层序遍历，使用队列来帮助实现
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    var queue = []
    var res = []
    if (root === null) {
        return res
    }
    queue.unshift(root)
    while (queue.length) {
        const pRoot = queue.pop()
        if (pRoot.left !== null) {
            queue.unshift(pRoot.left)
        }
        if (pRoot.right !== null) {
            queue.unshift(pRoot.right)
        }
        res.push(pRoot.val)
    }
    return res
}