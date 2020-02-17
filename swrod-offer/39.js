// 39 平衡二叉树
// 题目描述：
// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。

// 结合二叉树深度的递归来判断是否为平衡二叉树
// 平衡二叉树：是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    // write code here
    if (!pRoot) return true
    let leftDeep = treeDeep(pRoot.left)
    let rightDeep = treeDeep(pRoot.right)
    return Math.abs(leftDeep - rightDeep) <= 1 && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}
function treeDeep (pRoot) {
    if (!pRoot) return 0
    let leftTree = treeDeep(pRoot.left)
    let rightTree = treeDeep(pRoot.right)
    return Math.max(leftTree, rightTree) + 1
}

// 但是这种做法有很明显的问题，在判断上层结点的时候，会多次重复遍历下层结点，增加了不必要的开销。如果改为从下往上遍历，如果子树是平衡二叉树，则返回子树的高度；如果发现子树不是平衡二叉树，则直接停止遍历，这样至多只对每个结点访问一次。

function IsBalanced_Solution(pRoot) {
    return treeDeep(pRoot) !== -1;
}
function treeDeep(pRoot) {
    if (pRoot === null) return 0;
    const leftLen = treeDeep(pRoot.left);
    if (leftLen === -1) return -1;
    const rightLen = treeDeep(pRoot.right);
    if (rightLen === -1) return -1;
    return Math.abs(leftLen - rightLen) > 1 ? -1 : Math.max(leftLen, rightLen) + 1;
}
