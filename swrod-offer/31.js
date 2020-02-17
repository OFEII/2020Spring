// 31 整数中1出现的次数（从1到n整数中1出现的次数）
// 题目描述:
// 求出113的整数中1出现的次数,并算出1001300的整数中1出现的次数？为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。
function NumberOf1Between1AndN_Solution(n) {
    if(n<1) return 0
    let str = ''
    for (let i = 0; i <=n; i++) {
        str += String(i)
    }
    let cntArr = str.match(/1/g)
    return cntArr.length
}