// 34 第一个只出现一次的字符
// 题目描述：
// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.

// 方法一：
// 正则匹配比较个数
function FirstNotRepeatingChar(str){
    for (let i = 0; i < str.length; i++) {
        let r = `/${str[i]}/g`
        let arr = str.match(eval(r))
        if(arr.length === 1){
            return i
        }
    }
    return -1
}

