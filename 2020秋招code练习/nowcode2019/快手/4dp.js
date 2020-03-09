let m = parseInt(readline())
    i = 0

while (m > i) {
    let n = parseInt(readline())
    let dp = [1]
    for (let i = 1; i < n; i++) {
        let sum = 0
        for (let j = 1; j <= i; j*=2) {
            sum += dp[i-j]
            sum = sum%(10**9 + 3)
        }
        dp[i] = sum
    }
    print(dp[n])
    i++
}