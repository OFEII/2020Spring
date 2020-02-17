// 21 栈的压入、弹出序列
// 题目描述:
// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

// 使用一个辅助栈，先将pushV中的值依次压入辅助栈，在压入后将压入的值比对popV中的值，若有则弹出此时压入的值，并继续比较popV中的下一个值在辅助栈中是否还有，有则继续弹出辅助栈，直到比对到最后，若辅助栈为空，则是该压栈序列的弹出序列，反之亦然
function IsPopOrder(pushV, popV)
{
    let stack = []
    if (pushV.length === 0) return false
    for (let i = 0, j = 0; i < pushV.length; i++) {
        stack.push(pushV[i])
        while (j < popV.length && stack[stack.length - 1] === popV[j]) {
            stack.pop()
            j++
        }
    }
    if (stack.length === 0) {
        return true
    } else {
        return false
    }
}