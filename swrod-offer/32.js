// 32 题目描述
// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
function PrintMinNumber(ns)
{
    if(ns === 0) return ''
    ns.sort((a,b)=>{
        let s1 = String(a)+String(b)
        let s2 = String(b)+String(a)
        return s1-s2
    })
    return ns.join('')
}