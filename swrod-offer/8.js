// 斐波那契数列的变形
function jumpFloor(number)
{
    // write code here
    let a = 1
    let b = 2
    while (--number) {
        b = a + b
        a = b - a
    }
    return a
}