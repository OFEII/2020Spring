// 67 剪绳子
// 题目描述：
// 给你一根长度为n的绳子，请把绳子剪成m段（m、n都是整数，n>1并且m>1），每段绳子的长度记为k[0],k[1],…,k[m]。请问k[0]xk[1]x…xk[m]可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

// 输入描述:
// 输入一个数n，意义见题面。（2 <= n <= 60）

// 示例1：
// 输入
// 8
// 输出
// 18

function cutRope(n) {
    if(n === 2) return 1
    if(n === 3) return 2
    let x = n%3
    let y = Math.floor(n/3)
    if(x===0) return Math.pow(3,y)
    else if(x===1) return 2*2*Math.pow(3,y-1)
    else return 2*Math.pow(3,y)
}
// 方法二：（动态规划）
// 动态规划求解问题的四个特征： 
// ①求一个问题的最优解； 
// ②整体的问题的最优解是依赖于各个子问题的最优解； 
// ③小问题之间还有相互重叠的更小的子问题； 
// ④从上往下分析问题，从下往上求解问题；

function cutRope(n) {
    if(n === 2) return 1
    if(n === 3) return 2
    let dp = []
    dp[1]=1
    dp[2]=2
    dp[3]=3
    let res = 0
    for (let i = 4; i <= n; i++) {
        for (let j = 1; j < i/2; j++) {
            res = Math.max(res, dp[j]*dp[i-j])
        }
        dp[i]=res
    }
    return dp[n]
}

// 方法三：（贪婪解法）
// 当n大于等于5时，我们尽可能多的剪长度为3的绳子；当剩下的绳子长度为4时，把绳子剪成两段长度为2的绳子。 为什么选2，3为最小的子问题？因为2，3包含于各个问题中，如果再往下剪得话，乘积就会变小。 为什么选长度为3？因为当n≥5时，3(n−3)≥2(n−2)
function cutRope(number)
{
    // write code here
    if (number < 2) return 0
    if (number == 2) return 1
    if (number == 3) return 2
 
    let timesOf3 = number / 3
 
    /*  当最后绳子长度为 4 时，这时候分割成 2，2 而不是 3，1 因为2*2=4 > 3=3*1  */
    if (number - timesOf3 * 3 === 1) timesOf3--
    let timesOf2 = (number - timesOf3 * 3) / 2;
    return parseInt(Math.pow(3, timesOf3)) * parseInt(Math.pow(2, timesOf2))
}