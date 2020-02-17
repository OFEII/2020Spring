// 47 求1+2+3+…+n
// 题目描述：
// 求1+2+3+…+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
function Sum_Solution(n) {
    return (Math.pow(n,2)+n) >> 1
}

// 方法一：
// 递归短路求值，即&&前面如果判断为假则不执行后面的语句
function Sum_Solution(n)
{
    // write code here
    let sum = n
    sum && (sum += Sum_Solution(n - 1))
    return sum
}