// 方法三：（约瑟夫环公式）
// 由上分析使用递归实现
function LastRemaining_Solution(n, m) {
    if(n==0)
        return -1
    if(n==1)
        return 0
    else
        return (LastRemaining_Solution(n - 1, m) + m) % n
}