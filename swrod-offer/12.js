// 12 题目描述
// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

// 保证base和exponent不同时为0
function Power(base, exponent)
{
    return Math.pow(base,exponent)
}

// 法二：（快速幂求解）
function Power(base, exponent)
{
    // write code here
    let res = 1
    let n
    if (exponent > 0) {
        n = exponent
    } else if (exponent < 0) {
        if (base === 0) return -1
        n = -exponent
    } else {
        return 1
    }
    while (n) {
        if (n & 1) {
            res *= base
        }
        base *= base
        n >>= 1
    }
    return exponent > 0 ? res : 1 / res
}