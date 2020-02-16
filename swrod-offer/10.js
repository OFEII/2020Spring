// 10 矩阵覆盖
// 题目描述:
// 我们可以用21的小矩形横着或者竖着去覆盖更大的矩形。请问用n个21的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

// 斐波那契的变形
function rectCover(number)
{
    // write code here
    if (number === 0 ) return 0
    let x = 1
    let y = 2
    while (--number) {
        y += x
        x = y - x
    }
    return x
}