// 28 数组中出现次数超过一半的数字
// 题目描述:
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

// 准备一个辅助数组等于传入的数组，将传入数组的每个值在辅助数组中查找，查找到则次数+1，直到其出现的次数大于数组的一半时，则返回此值
function MoreThanHalfNum_Solution(numbers){
    let arr = [...numbers]
    for (let i = 0; i < numbers.length; i++) {
        let cnt =0 
        for (let j = 0; j < arr.length; j++) {
            if(arr.indexOf(numbers[i]) !== -1){
                arr.splice(arr.indexOf(numbers[i]),1)
                cnt ++
            }
        }
        arr = [...numbers]
        if(cnt > Math.floor(numbers.length/2)){
            return numbers[i]
        }
    }
    return 0
}
