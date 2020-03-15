// var readline=require('readline');
// r1=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// var inputs=[];
// r1.on('line', function(data) {
//     // 获取输入
//     var inputs = data.trim().split(' ');
//     // 处理
//     var result = deal(inputs);
//     // 输出结果
//     console.log(result);
// });
// function deal(inputs){
//     var n=inputs[0];
//     var k=inputs[1];
//     var dp=new Array(); 
// //先声明一维 
//    for(var i=0;i<=n;i++){ 
// //一维长度为10 
//      dp[i]=new Array(); 
// //在声明二维 
//     for(var j=0;j<=n;j++){ 
//        dp[i][j]=0; 
//  } }
//     for(var i=2;i<=n;i++){
//         dp[i][0]=1;
//         dp[i][i-1]=1;
//     }
//     for(var i=3;i<=n;i++){
//         for(var j=1;j<=i-2;j++){
//             dp[i][j]=dp[i-1][j]*(j+1)%2017+dp[i-1][j-1]*(i-j)%2017;
//         }
//     }
//     return dp[n][k]%2017; 
// }

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let nk = inArr[0].split(' ').map(e=>+e)
        let n = nk[0], k = nk[1]
        let dp = new Array(n+1).fill(0).map(()=>new Array(k+1).fill(0))
            for(var i=2;i<=n;i++){
                dp[i][0] = 1
                dp[i][i-1] = 1
            }
            for(var i=3;i<=n;i++){
                for(var j=1;j<=i-2;j++){
                    dp[i][j] = dp[i-1][j]*(j+1)%2017 + dp[i-1][j-1]*(i-j)%2017
                }
            }
            console.log(dp[n][k]%2017)
        
    }
})