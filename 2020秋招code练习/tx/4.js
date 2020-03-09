const iterator = (arr) => {
    let n = arr.length
    let dp = new Array(n).fill(0).map(()=> new Array(n).fill(0))
    let c = parseInt((n+1)/2)
    let num = 1 
    let i =0, j =0, k =0
    let res=''
    for(k = 0; k < c; k++)
    {
        while (j < n - k)
        {
            dp[i][j] = num++;
            j--;
        }
        j--;
        i++;
        while (i < n - k)
        {
            dp[i][j] = num++;
            i++;
        }
        i--;
        j--;
        while (j>=k)
        {   
            dp[i][j] = num++;
            j--;
        }
        i--;
        j++;
        while (i > k)
        {   
            dp[i][j] = num++;
            i--;
        }
        i++;
        j++;
    }
    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < dp[i].length; j++) {
    //         res += dp[i][j]+', '
            
    //     }
        
    // }
    return dp

    // TODO
  };
let arr =[
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]
let res = iterator(arr)
console.log(res)