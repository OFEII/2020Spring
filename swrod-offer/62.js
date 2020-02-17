// 62 二叉搜索树的第k个结点
// 题目描述：
// 给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8） 中，按结点数值大小顺序第三小结点的值为4。

// 方法一：（递归）
// 二叉搜索树中序遍历的结果为从小到大排列。输出第k-1即为结果
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
    // write code here
    let arr = []
    treeTra(pRoot, arr)
    if (k > 0 && k <= arr.length) {
        return arr[k - 1];
    }
    return null
}
function treeTra (pRoot, arr) {
    if (!pRoot) return
    treeTra(pRoot.left, arr)
    arr.push(pRoot)
    treeTra(pRoot.right, arr)
}
