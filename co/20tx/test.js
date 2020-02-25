var reverseStr = function(s, k) {
    let res = ''
    let isReverse = false
    for(let i =0;i<s.length;i+=k){
        let str = s.slice(i, i+k)
        res += isReverse?str:str.split('').reverse().join('')
        isReverse =!isReverse
    }
    return res
};
console.log(reverseStr('1234',2))

// var countPrimes = function(n) {
//     var count = 0;
//     for (let i = 1; i < n; i++) {
//         if (isPrime(i)) {
//             count++
//         }
//     }
//     // 判断是否是质数
//     function isPrime(k) {
//         if (k === 1) {
//             return false
//         }
//         for(let i = 2; i < k; i++) {
//             if (Number.isInteger(k/i)) {
//                 return false
//             }
//         } 
//         return true   
//     }
//     return count; 
// };
// console.log(countPrimes(10))