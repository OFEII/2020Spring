// 26 二叉搜索树与双向链表
// 题目描述:
// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
// 方法一：（非递归）
// 核心是中序遍历的非递归算法。
// 修改当前遍历节点与前一遍历节点的指针指向。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    // write code here
    if (!pRootOfTree) return null
    let stack = [],
        p = pRootOfTree,
        pre = null,
        isFirst = true
    while (p || stack.length) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        p = stack.pop()
        if (isFirst) {
            pRootOfTree = p
            pre = pRootOfTree
            isFirst = false
        } else {
            pre.right = p
            p.left = pre
            pre = p
        }
        p = p.right
    }
    return pRootOfTree
}