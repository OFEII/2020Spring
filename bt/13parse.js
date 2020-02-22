var jsonStr = '{ "age": 20, "name": "jack" }'

function myParse1(e) {
    return eval('(' + e + ')')
}
var myParse2 = (new Function('return ' + myParse2Str))()

console.log(json)
console.log(myParse1(jsonStr))

// eval 与 Function 都有着动态编译js代码的作用
// 第一种：直接调用 eval
// 第二种：Function
