// 64 滑动窗口的最大值
// 题目描述：
// 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。

// 如果我们以滑动窗口为对象，那么就是数组在滑动窗口上移动。
// 显然，可以看出滑动窗口就是一个队列，数组中的一个一个的数先进去，先出来。
// 此外这题还有一个可以优化的一点就是不一定需要把所有数字存进去队列里，只需要把以后有可能成为最大值的数字存进去。
// 还有一点要注意的是队列里保存的是下标，而不是实际的值，因为窗口移动主要是下标的变化
// 当然还有其他解法，比如利用两个栈去实现这个队列，从而使得查询时间复杂度降低到O(n)
function maxInWindows(num, size){
    let res =[]
    if(size == 0){
        return res
    }
    let begin
    let queue = []
    for(let i =0;i<num.length; i++){
        begin = i-size+1 // windows-left
        if(queue.length==0){
            queue.push(i)
        }else if(begin>queue[0]){
            queue.shift()
        }
        while((queue.length !=0) && (num[queue[queue.length - 1]] <= num[i])){
            queue.pop()
        }
        queue.push(i)
        if(begin >=0){
            res.push(num[queue[0]])
        }

    }
    return res
}