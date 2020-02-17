// 1 二维数组查找整数
题目描述:
// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 方式一（暴力循环）：
// 解题思路：使用双重循环，外层表示当前第几行的数组，内层表示对每行的一维数组的遍历，直到找到需要查找的那个整数
function Find(target, array)
{
    // write code here
    var arrLen = array.length
    var arrChildLen = array[0].length
    for (let i = 0; i < arrLen; i++) {
        for (let j = 0; j < arrChildLen; j++) {
            if (array[i][j] === target) {
                return true
            }
        }
    }
    return false
}


// 方式二：
// 解题思路：以二维数组的左下角这个值开始和需要查找的整数比较，比整数大则行下标减一，比整数小则列下标加一，直至找到退出
function Find(target, array)
{
    // write code here
    var arrLen = array.length
    var arrChildLen = array[0].length
    var rowIndex = arrLen - 1
    var colIndex = 0
    
    while (rowIndex >= 0 && colIndex <= arrChildLen - 1) {
        if (array[rowIndex][colIndex] === target) {
            return true
        } else if (array[rowIndex][colIndex] > target) {
            rowIndex -= 1
        } else {
            colIndex += 1
        }
    }
    return false
}