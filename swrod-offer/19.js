// 模拟魔方逆时针解法。
// 例如 
// 1 2 3
// 4 5 6
// 7 8 9
// 输出并删除第一行后，再进行一次逆时针旋转，就变成：
// 6 9 
// 5 8
// 4 7
// 继续重复上述操作即可
// (即定义一个翻转矩阵的函数再重复去掉第一行)
function printMatrix(matrix)
{
    var list = [...matrix.shift()]
    while (matrix.length) {
        matrix = rotateMatrix(matrix)
        list = list.concat(matrix.shift())
    }
    return list
}
function rotateMatrix (matrix) {
    if(!matrix[0]){
        return matrix
    }
    rowL = matrix[0].length
    colL = matrix.length
    let newMatix = []
    for (let i = rowL-1;i>=0;i--) {
        let newArr = []
        for(let j = 0; j<colL; j++){
            newArr.push(matrix[j][i])
        }        
        newMatix.push(newArr)
    }
    return newMatix 
    
}
