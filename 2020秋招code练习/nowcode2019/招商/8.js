// dp string
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr =[]
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    let n = inArr[0] // 一串编码过的数字
    let s = n.toString()
    // crate a new arr(len=s.length + 1)and fill 0
    let dp = new Array(n.length+1).fill(0)
    dp[0]= dp[1] = 1
    for (let i = 0; i <= n.length; i++) {
        //如果该位不为'0'，说明该位单独成字母合法
        if(n.charAt(i-1) !='0'){
            dp[i] += dp[i-1]
        }
        //如果后两位能组成"1x"（x为任意数字）或者"2x"（x小于7），说明最后两位组成字母合法
        if((n.charAt(i - 2) == '1') || (n.charAt(i - 2) == '2' && n.charAt(i - 1) <= '6')){
            dp[i] +=dp[i-2]
        }
    }
    console.log(dp)
    console.log(s)
})
