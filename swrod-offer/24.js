// 深度优先遍历思想，将沿途的值相加若等于传入的整数，则此条路通，放入listAll
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    // write code here
    let list = []
    let listAll = []
    return dfs(root, expectNumber, list, listAll)
}
function dfs (root, expectNumber, list, listAll) {
    if (root === null) return listAll
    list.push(root.val)
    expectNumber -= root.val
    if (expectNumber === 0 && root.left === null && root.right === null) {
        listAll.push(Array.of(...list))
    }
    dfs(root.left, expectNumber, list ,listAll)
    dfs(root.right, expectNumber, list ,listAll)
    list.pop()
    return listAll
}