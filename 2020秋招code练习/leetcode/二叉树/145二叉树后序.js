const postorderTraversal = root => {
    let res = [], stack = []
    while (root || stack.length) {
      res.unshift(root.val)
      if (root.left) stack.push(root.left)
      if (root.right) stack.push(root.right)
      root = stack.pop()
    }
    return res
  }
  console.log(postorderTraversal(1,null,2,3))
  var obj = {};
  obj.log = console.log;
  obj.log.call(console,this);