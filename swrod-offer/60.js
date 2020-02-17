// 60 把二叉树打印成多行
// 题目描述：
// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

// 方法一：（递归实现）
// 利用递归的方法进行先序遍历，传递深度，递归深入一层扩容一层数组，先序遍历又保证了同层节点按从左到右入数组
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    let list = []
    depth(pRoot, 1, list)
    return list
}

function depth (root, deepth, list) {
    if (!root) return
	// 为什么判断深度大于数组长度？ 假如现在元素是[1,2,3]，当进入2时会创建一个 数组,此时 depth = 2,size=2；当2遍历完后会进入3，此时3 就不用创建数组了，因为 2,3是同一层的，并且此时 depth==size 。这个判断是用来让最左的元素创建新数组就行了，而同一层后边的元素共用这个数组
    if (deepth > list.length) list.push(new Array())
    list[deepth - 1].push(root.val)
    depth(root.left, deepth + 1, list)
    depth(root.right, deepth + 1, list)
}