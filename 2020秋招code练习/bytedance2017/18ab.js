// 有一个仅包含’a’和’b’两种字符的字符串s，长度为n，每次操作可以把一个字符做一次转换（把一个’a’设置为’b’，或者把一个’b’置成’a’)；但是操作的次数有上限m，问在有限的操作数范围内，能够得到最大连续的相同字符的子串的长度是多少。
// 1
let readline=require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let countLine=0;
let n,m,s;
let countt=[];
r1.on('line',function(line){
    if(countLine===0){
        let arr0=line.split(/\s+/);
        n=parseInt(arr0[0]);
        m=parseInt(arr0[1]);
    }else{
        s=line;
        countt[0]=0;
        for(let index=0;index<s.length;index++){
            if(s[index]==='a'){
                countt[index+1]=countt[index]+1;
            }else{
                countt[index+1]=countt[index];
            }
        }
        binarySearch().then((data)=>{
            console.log(data);
        });
        countLine=0;
    }
    countLine++;
});
function binarySearch(){
    let l=0,r=n;
    return new Promise((resolve,reject)=>{
        while(l<r){
            let mid=Math.floor((l+r)/2);
            if(doWithinMsteps(mid)){
                l=mid+1;
            }else{
                r=mid;
            }
        }
        resolve(l);
    })
}
function doWithinMsteps(x){
    for(let index=1;index+x<=n;index++){
        if(countt[index+x]-countt[index-1]<=m){
            return true;
        }
        if(1+x+countt[index-1]-countt[index+x]<=m){
            return true;
        }
    }
    return false;
}
// 2 
let [n,m]=readline().split(' ').map(i=>parseInt(i));
let str=readline();
let aPositions=[];//所有a出现的位置，下面类似
let bPositions=[];
for(let i=0;i<str.length;i++){
    if(str[i]==='a'){aPositions.push(i);}
    else{bPositions.push(i);}//字符串里只能有a和b
}
let result;//准备储存结果
for(let i of [0,1]){
    let arr;
    if(i===0){arr=aPositions;}//考虑把找最长的b的子串
    else{arr=bPositions;}//考虑找最长的a的子串
    if(m>=arr.length){//这种情况下可以把所有字符全变成a或b
        result=str.length;
        break;
    }
    for(let i=1;i<arr.length-m;i++){
        let temp=arr[i+m]-arr[i-1]-1;
        result=result>temp?result:temp;
    }
    result=result>arr[m]?result:arr[m];//从第一个字符开始去
    let toEnd=str.length-1-arr[arr.length-1-m];//到最后一个字符
    result=result>toEnd?result:toEnd;
}
console.log(result);

// 3 字节跳动a和b互换的字符串
const read = require('readline');
const r1 = read.createInterface({
    input:process.stdin,
    output:process.stdout
})
var rows = [];
var arr = [];
r1.on('line',function(line){
    rows.push(line);
    if(rows.length >= 2)
    {
        var one = rows[0].split(' ').map((value)=>parseInt(value,10))[1];
        arr = rows[1].split('');
        var brr = [];
        for(var i=0;i<arr.length;++i)
        {
            if(arr[i] == 'a')
                brr.push(i);
        }
        var maxstack =[brr[one]];
        for(var j=1;j<=brr.length-one-1;++j)
        {
            maxstack.push(brr[j+one]-brr[j-1]-1);
        }
        maxstack.push(arr.length-brr[brr.length-one-1]-1);
        var first = (Math.max.apply(null,maxstack));
        var crr = [];
        for(var i=0;i<arr.length;++i)
        {
            if(arr[i] == 'b')
                crr.push(i);
        }
        var maxstack =[crr[one]];
        for(var j=1;j<=crr.length-one-1;++j)
        {
            maxstack.push(crr[j+one]-crr[j-1]-1);
        }
        maxstack.push(arr.length-crr[crr.length-one-1]-1);
        var second = (Math.max.apply(null,maxstack));
        console.log(Math.max(first,second));
    }
})

//4 
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
    let outline = 1;
 
 
    rl.on('line', function(line) {
        if(outline == 1){
            let flag = line.split(' ');
            n = parseInt(flag[0]);
            m = parseInt(flag[1]);
            // console.log(m);
        }
        if(outline >= 2){
            let A = [];
            for(let i=0;i<line.length;i++){
                A[i] = (line[i]=="a") ? 1:0;
            }
            function test(K,x){
                let ans = 0, cnt = 0, idx = 0;
                for(let i = 0; i < n; i++) {
                    if(A[i] == x) cnt++;
                    else if(K > 0) {
                        K--;
                        cnt++;
                    }else {
                        while(A[idx] == x && idx < n) {
                            idx++;
                            cnt--;
                        }
                        idx++;
                    }
                    ans = Math.max(ans, cnt);
                }
                return ans;
            }
            // console.log()
            console.log(Math.max(test(m,1),test(m,0)));
        }
        outline++;
    })