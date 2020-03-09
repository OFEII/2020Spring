// 给定一个正整数数组，它的第 i 个元素是比特币第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一次），设计一个算法来计算你所能获取的最大利润。

// O(n)的做法   对于第i个位置上的元素，我们只需要知道区间[0, i - 1]最小值，就可以得出第二个数的位置为i的最大差值有序偶，枚举i就可以得出答案；而区间[0, i - 1]最小值可以预处理出来。

// 注意你不能在买入比特币前卖出
// node
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let arr = inArr[0].split(' ').map(e=>+e)
        let min = arr[0]
        let res = ''
        for (let i = 0; i < arr.length; i++) {
            min = Math.min(arr[i], min)
            res = Math.max(res, arr[i]-min)
        }
        console.log(res)
    }
})