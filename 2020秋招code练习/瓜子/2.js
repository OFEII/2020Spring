const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line)
    if(inArr.length === 1){
        let n = +inArr[0]
        let cnt = 0 
        cnt %= Math.pow(10,9)+7
       console.log(cnt)
    }
})
var readline=require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
var coin=[1,2,5,10]
var coinCombination=function(n){
    let dp=new Array(100001);
    dp.fill(0);
    dp[0]=1;
    for(let i=0;i<4;i++){
        for(let j=coin[i];j<=n;j++){
            dp[j]+=dp[j-coin[i]];
        }
    }
    console.log(dp[n]%1000000007)
}
r1.on('line',function(line){
    let n=parseInt(line);
    coinCombination(n);
})