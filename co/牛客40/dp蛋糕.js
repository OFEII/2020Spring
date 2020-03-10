function cakeNumber( n ) {
    let dp = new Array(n+1).fill(0)
    dp[n] = 1
    for (let i = n; i >0; i--) {
        dp[i-1] =Math.floor((dp[i]+1)*3/2)
    }
    return dp[1]
}
console.log(cakeNumber(5))
