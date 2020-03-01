// 两个数不使用四则运算得出和   
function sum(a, b) {
    if (a == 0) return b
    if (b == 0) return a
    let newA = a ^ b //异或
    let newB = (a & b) << 1 // 与 左移 a*(2^b)
    return sum(newA, newB)
}
console.log(sum(100,99))
