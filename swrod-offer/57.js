// 57 二叉树的下一个结点
// 题目描述：
// 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

// 方法一：
// 先找出根节点然后中序遍历压入数组，在数组中找到需要找出的那个节点的下一个节点（index+1）
// 第一种(非递归方法)
/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
    // write code here
    let pHead = pNode
    while (pHead.next !== null) {
        pHead = pHead.next
    }
    var stack = []
    let p = pHead
    let arr = []
    while (p || stack.length !== 0) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        p = stack.pop()
        arr.push(p)
        p = p.right
    }
    return arr[arr.indexOf(pNode) + 1]
}

// 第二种(递归方法)
function GetNext(pNode)
{
    // write code here
    let pHead = pNode
    while (pHead.next !== null) {
        pHead = pHead.next
    }
    let arr = []
    midTra(pHead, arr)
    return arr[arr.indexOf(pNode) + 1]
}
function midTra(pNode, arr) {
    if (!pNode) return
    midTra(pNode.left, arr)
    arr.push(pNode)
    midTra(pNode.right, arr)
}
