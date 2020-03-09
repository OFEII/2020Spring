// 考虑动态规划
// dp[i][j]表示第i个字符到第j个字符中包含的最大回文子串的最大长度
// i:j->0若a[i]与a[j]有相同的字符，则最大长度为dp[i+1][j-1]+2;
// 否则为以下最大值 max(dp[i+1][j],dp[i][j-1])

//使用动态规划的思想，d[i][j]表示字符串s中位置j到位置i（i>j）的字符串中的最长的回文长度，
//当s[i]==s[j]时,d[i][j]的最长回文字符串长度为其子串d[i-1][j+1]的长度+2
//当s[i]!=s[j]时,d[i][j]的最长回文字符串长度为d[i-1][j]和d[i][j+1]两个中的最大值
//最后，d[n-1][0]就是最后的长度
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
        let str = inArr[0]
        let n = str.length
        let dp = new Array(n).fill(0).map(()=> new Array(n).fill(0))//二维数组
        for (let j = 0; j < n; j++) { //右边界index
            dp[j][j] = 1
            for (let i = j-1; i >= 0; i--) { //左边界index
                if(str[i] === str[j]){
                    dp[i][j] = dp[i+1][j-1] + 2
                }else{
                    dp[i][j]= Math.max(dp[i+1][j],dp[i][j-1])
                }
            }
        }
        console.log(dp[0][n-1])
    }
})

// adbca
// [ [ 1, 1, 1, 1, 3 ],
//   [ 0, 1, 1, 1, 1 ],
//   [ 0, 0, 1, 1, 1 ],
//   [ 0, 0, 0, 1, 1 ],
//   [ 0, 0, 0, 0, 1 ] ]