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
        let n = +inArr[0]
        console.log(num2Cn(n))

    }
})

function num2Cn(num) {
    let arr1 = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九');
    let arr2 = new Array('', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千','万', '十', '百', '千','亿');

    if(!num || isNaN(num)){

        return "零"
    }
    let s2 = num.toString().split('')
    let res = ""
    for (let i = 0; i < s2.length; i++) {
        let des_i = s2.length - 1 - i
        res = arr2[i] + res
        let arr1_index = s2[des_i]
        res = arr1[arr1_index] + res
    }
    res = res.replace(/零(千|百|十)/g, '零').replace(/十零/g, '十');
    res = res.replace(/零+/g, '零');
    res = res.replace(/零亿/g, '亿').replace(/零万/g, '万');
    res = res.replace(/亿万/g, '亿');
    res = res.replace(/零+$/, '')
    res = res.replace(/^一十/g, '十');
    return res
}