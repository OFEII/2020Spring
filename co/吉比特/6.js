const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);// 获取此行数据
    var n = +inputArr[0];// 获取行数
    if(inputArr.length==2){ // 获取了此轮所有数据，此时获取元素 nLine+1 个，第一个元素为行数nLine.
       var arr = inputArr[1].split(" ");
        arr.sort(function(a,b){
            return a-b;
        });
        var max = parseInt(arr[1])-parseInt(arr[0]);
        for(var i=2;i<n;i++){
            if(parseInt(arr[i])-parseInt(arr[i-1])>max){
                max = parseInt(arr[i])-parseInt(arr[i-1]);
            }
        }
        console.log(max);
    }
});