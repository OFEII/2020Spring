const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let str = inArr[0]
        console.log(longestPalindrome(str))
    }
})

var longestPalindrome = function (s) {
    if (s.length < 2) return s;
    let len = s.length,
        maxLen = 0,
        left = 0,
        right = 0,
        start = 0;
    for (let i = 0; i < len;) {
        if (len - i <= maxLen / 2) break;
        left = i;
        right = i;
        while (right < len - 1 && s[right + 1] == s[right]) {
            ++right;
        }
        i = right + 1;
        while (right < len - 1 && left > 0 && s[right + 1] == s[left - 1]) {
            ++right;
            --left;
        }
        if (maxLen < right - left + 1) {
            maxLen = right - left + 1;
            start = left;
        }
    }
    return s.substring(start, start + maxLen);
};