// 题目描述
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
function minNumberInRotateArray(rotateArray)
{
    return rotateArray.sort((a,b)=> a-b)[0]
}

// 方法一：
// 二分查找的思想找到最大和最小分界的地方
function minNumberInRotateArray(rotateArray)
{
    // write code here
    var left = 0
    var right = rotateArray.length - 1
    while (right - left > 1) {
        var mid = Math.floor((left + right) / 2)
        if (rotateArray[mid] > rotateArray[right]) {
            left = mid
        } else {
            right = mid
        }
    }
    return Math.min(rotateArray[left],rotateArray[right])
}