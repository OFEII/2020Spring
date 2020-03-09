//1.冒泡排序-时间复杂度  O（n²）
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
let h =[]
let n
rl.on('line',line=>{
    if(!line) return
    inArr.push(line)
    n = +inArr[0]
    if(inArr.length === n+1){
        let cnt = 0
        for (let i = 0; i < n; i++) {
            h[i] = +inArr[i+1] 
        }
        for (let i = 0; i < h.length; i++) {
            for (let j = 0; j < i; j++) {
                if(h[j] > h[i]){
                    cnt++
                }        
            }       
        }
        console.log(cnt)
    }
})
//2.归并 nlog(n)
//因每次只能修改相邻两个值的顺序，即修改一个逆序，故最少操作数为数列的逆序数
//由于需要复杂度为O(nlogn)，故考虑归并排序
// var line;
// while(line = readline()){
//     var n = parseInt(line),
//         Hi = [],
//         count = 0;
//     for(let i = 0; i < n; i++){
//         Hi.push(parseInt(readline()));
//     }
//     var merge = function(leftArr, rightArr){
//         var result = [];
//         while(leftArr.length > 0 && rightArr.length > 0){
//             if(leftArr[0] > rightArr[0]){
//                     count += leftArr.length; //不能直接交换，所以是中间差
//                     result.push(rightArr.shift());
//                 }else{
//                     result.push(leftArr.shift());
//                 }
//         }
//         if(leftArr.length > 0){
//             result = result.concat(leftArr);
//         }
//         if(rightArr.length > 0){
//             result = result.concat(rightArr);
//         }
//         return result;
//     };
//     var sort = function(arr){
//         var len = arr.length;
//         if(len < 2){
//             return arr;
//         }
//         var mid = len >> 1,
//             leftArr = arr.slice(0, mid),
//             rightArr = arr.slice(mid);
//         return merge(sort(leftArr), sort(rightArr));
//     };
//     sort(Hi);
//     print(count);
// }
