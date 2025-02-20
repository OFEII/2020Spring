// 65 矩阵中的路径
// 题目描述：
// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 例如 a b c e s f c s a d e e 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。

// 分析题意，我们可以知道这道题用回溯法解决最好，因为我们需要一个一个字母的匹配，当发现不行时，就要回溯上个步骤，选择另一步。

// 回溯法是一种选优搜索法，按选优条件向前搜索，以达到目标。但当探索到某一步时，发现原先选择并不优或达不到目标，就退回一步重新选择，这种走不通就退回再走的技术为回溯法，而满足回溯条件的某个状态的点称为“回溯点”。

// 回溯法的基本思想：

// 在包含问题的所有解的解空间树中，按照深度优先搜索的策略，从根结点出发深度探索解空间树。当探索到某一结点时，要先判断该结点是否包含问题的解，如果包含，就从该结点出发继续探索下去，如果该结点不包含问题的解，则逐层向其祖先结点回溯。（其实回溯法就是对隐式图的深度优先搜索算法）。

// 若用回溯法求问题的所有解时，要回溯到根，且根结点的所有可行的子树都要已被搜索遍才结束。

// 而若使用回溯法求任一个解时，只要搜索到问题的一个解就可以结束。

// 字典树也有点和回溯法的解空间树类似。

// 思路如上
function hasPath(matrix, rows, cols, path) {
  const pathLength = 0;
  const visited = new Array(rows * cols);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // 遍历，遍历的点为起点。
      if (hasPathCore(matrix, rows, cols, row, col, path, pathLength, visited)) {
        return true;
      }
    }
  }
  return false;
}
function hasPathCore(matrix, rows, cols, row, col, path, pathLength, visited) {
  let hasPath = false;
  if (pathLength === path.length) return true;
  if (
    row >= 0 &&
    row < rows &&
    col >= 0 &&
    col < cols &&
    matrix[row * cols + col] === path[pathLength] &&
    !visited[row * cols + col]
  ) {
    ++pathLength;
    visited[row * cols + col] = true;
    // 因为||为短路运算符，只要第一个满足就会返回，而不会去计算后面的，所以有些路径可以不用去走。
    hasPath =
      hasPathCore(matrix, rows, cols, row - 1, col, path, pathLength, visited) ||
      hasPathCore(matrix, rows, cols, row, col - 1, path, pathLength, visited) ||
      hasPathCore(matrix, rows, cols, row + 1, col, path, pathLength, visited) ||
      hasPathCore(matrix, rows, cols, row, col + 1, path, pathLength, visited);
    if (!hasPath) {
      --pathLength;
      visited[row * cols + col] = false;
    }
  }
  return hasPath;
}