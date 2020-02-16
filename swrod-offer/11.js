// 法一
// 二进制的数当自己与自己-1 相与，则会将最右边的1变为0，直到循环至最左边的1
function NumberOf1(n)
{
    // write code here
    let count = 0
    while (n) {
        n = n & n - 1
        count++
    }
    return count
}