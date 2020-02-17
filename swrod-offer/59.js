// 59 按之字形顺序打印二叉树
// 题目描述：
// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。

// 正常的广度遍历的话，都是同样的顺序，从左到右，而我们要在广度遍历的基础上改造为之字形遍历。
// 也就是我们需要在奇数行从左至右，在偶数行从右至左，因为是先进后出，分析可得我们需要的数据结构是栈。
// 为了避免顺序错误，我们需要的不只是一个栈，而是两个栈，这个大家画图研究下就能想到。
// 两个栈是这么用的，这个栈保存这一行的数据，另一个栈保存下一行的数据，然后一行打印完后交替。
// 当然可以在广度遍历的基础上加个临时数组，然后对偶数行的数据reverse，但是reverse效率太低，所以就不用这种方法了
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
    // write code here
  const lists = []

  if (pRoot === null) {
    return lists
  }

  const stack1 = []
  const stack2 = []

  stack2.push(pRoot)
  let i = 1
  while (stack1.length !== 0 || stack2.length !== 0) {
    const list = []

    // 为奇数层
    if ((i & 1) === 1) {
      while (stack2.length !== 0) {
        const tmp = stack2[stack2.length - 1]
        stack2.pop()
        list.push(tmp.val)
        if (tmp.left !== null) stack1.push(tmp.left)
        if (tmp.right !== null) stack1.push(tmp.right)
      }
    }
    // 为偶数层
    else {
      while (stack1.length !== 0) {
        const tmp = stack1[stack1.length - 1]
        stack1.pop();
        list.push(tmp.val);
        if (tmp.right !== null) stack2.push(tmp.right)
        if (tmp.left !== null) stack2.push(tmp.left)
      }
    }
    ++i
    lists.push(list)
  }
  return lists
}