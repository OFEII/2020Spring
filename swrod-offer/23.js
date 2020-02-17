// 题目描述
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
// 方法二： 非递归实现，思路和递归差不多,定义了i从头开始和最后一个值比较，如果中间的值不对，则i最终比maxIndex小。
function VerifySquenceOfBST(sequence)
{
        // write code here
        let maxIndex = sequence.length
        if (maxIndex === 0) return false
        while (maxIndex--) {
            let i = 0
            while (sequence[i] < sequence[maxIndex]) i++
            while (sequence[i] > sequence[maxIndex]) i++
            if (i < maxIndex) return false
        }
        return true
}