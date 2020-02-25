var uniquePaths = function(m, n) {
    let dp = new Array(n).fill(0).map(()=>new Array(m).fill(0))
    for (let i = 0; i < n; i++) {
        dp[i][0]=1
    }
    for (let j = 0; j < m; j++) {
        dp[0][j]=1
    }
    for (let k = 1; k < n; k++) {
        for (let l = 1; l < m; l++) {
            dp[k][l] = dp[k-1][l]+dp[k][l-1]
        }
        
    }
    return dp

};
console.log(uniquePaths(7,3))

var uniquePathsWithObstacles = function(obstacleGrid) {
    let n = obstacleGrid.length
    let m = obstacleGrid[0].length
    let dp = new Array(n).fill(0).map(()=>new Array(m).fill(0))
    dp[0][0] = obstacleGrid[0][0] == 0?1:0
    if(dp[0][0]==0){
        return 0
    }
    for (let i = 1; i < n; i++) {
        if(dp[i][0]!=1){
            dp[i][0]=dp[i-1][0]
        }
    }
    for (let j = 1; j < m; j++) {
        if(dp[0][j]!=1){
            dp[0][j]=dp[0][j-1]
        }
    }
    for (let k = 1; k < n; k++) {
        for (let l = 1; l < m; l++) {
            if(obstacleGrid[k][l] !=1)
            dp[k][l] = dp[k-1][l]+dp[k][l-1]
        }
        
    }
    return dp[n-1][m-1]

};
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))