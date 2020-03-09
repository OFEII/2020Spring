let str = readline()//获取输入字符串
let cnt = {} //obj
let res ='' //str
for (let i = 0; i < str.length; i++) {
    // 当！后面的变量不为null时，就不进入判断语句
    //逻辑对象无初始值或者其值为 0、-0、null、""、false、undefined 或者 NaN，那么if判断 false
    // stringObject.charAt(index) 返回指定位置的字符 0-空字符串
    if(!cnt[str[i]]){
        cnt[str[i]] = 1
    }else{
        cnt[str[i]]++
    }
}
// Object.keys()要返回其枚举自身属性的对象。
// 一个表示给定对象的所有可枚举属性的字符串数组 
// Object.keys()-枚举cnt里面的属性值
// sort() a=>z
//..Object.entries/Object.values()
let sortArr = Object.keys(cnt).sort()
for (let i = 0; i < sortArr.length; i++) {
    res += sortArr[i]+cnt[sortArr[i]]
}
// console.log(cnt)
// console.log(sortArr)
console.log(res)