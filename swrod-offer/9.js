// 9 超级青蛙跳
// 题目描述:
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

// 青蛙跳的变形
// 其中n级台阶为 a[n] = a[n-1] + a[n-2] + ... + a[1]
//             a[n-1] = a[n-2] + ... + a[1]
// 则两式相减 a[n] = 2*a[n-1] 从而得知上n级台阶是n-1级跳法的2倍
function jumpFloorII(n)
{
    // write code here
    let i = 1
    while (--n) {
        i *= 2
    }
    return i

    return Math.pow(2,n-1)
}